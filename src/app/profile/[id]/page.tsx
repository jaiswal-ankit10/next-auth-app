"use client";

export default function UserProfile({ params }: any) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Welcome to the Profile Page</h1>
      <p>
        Profile page{" "}
        <span className="bg-orange-500 text-black p-2">{params.id}</span>
      </p>
    </div>
  );
}
