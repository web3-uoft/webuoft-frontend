
import { db } from "@/utils/db";
import { getDocs, collection, query, orderBy } from "firebase/firestore";

export default async function handler(req, res) {
    const userCollectionName = req.query.collectionName;
    const qMembers = query(collection(db, userCollectionName), orderBy("priority", "desc"), orderBy("name", "asc"));
    const queryMembersSnapshot = await getDocs(qMembers);
    var memberList = [];

    queryMembersSnapshot.forEach(async (member) => {
        memberList.push({
            id: member.id,
            ...member.data(),
        })
    });

    for (var member of memberList) {
        const qLinksRef = collection(db, `${userCollectionName}/${member.id}/links`)
        const qLinks = query(qLinksRef, orderBy("iconName", "desc"));
        const queryLinksSnapshot = await getDocs(qLinks)
        var linksData = [];
        queryLinksSnapshot.forEach(async (links) => {
            linksData.push(links.data())
        });
        memberList[memberList.map(e => e.id).indexOf(member.id)].links = linksData;
    }

    res.status(200).json({ success: true, data: memberList });
}
