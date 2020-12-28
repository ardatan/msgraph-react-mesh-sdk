import { useState, useEffect } from "react";
import { FetchRecentEmailsQuery } from "./mesh/sdk";
import { useMeshSdk } from "./mesh/useMeshSdk";

export default function RecentEmails({ accessToken }: { accessToken?: string }) {
  const [fetchRecentEmailsData, setFetchRecentEmailsData] = useState<
    FetchRecentEmailsQuery
  >();

  const sdk = useMeshSdk({ accessToken });

  useEffect(() => {
    sdk?.fetchRecentEmails().then((data) => {
      setFetchRecentEmailsData(data);
    });
  }, [sdk]);
  return (
    <ul>
      {fetchRecentEmailsData?.me?.messages?.map((message) => (
        <li>
          <p>
            <b>From:</b> {message?.from?.emailAddress?.address}
          </p>
          <p>
            <b>Subject:</b> {message?.subject}
          </p>
        </li>
      ))}
    </ul>
  );
}