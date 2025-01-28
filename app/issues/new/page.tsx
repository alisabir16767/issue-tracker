'use client'
import React from 'react';
import { Button } from '@radix-ui/themes';
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

const NewIssuesPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <div className="w-full max-w-md space-y-4">
        {/* Correct usage of TextField */}
        <div className="w-full">
          <label className="block text-sm font-medium text-gray-700">Title</label>
          <input type="text" placeholder="Enter issue title..." className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>

        {/* Fallback to textarea */}
        <SimpleMDE
          className="w-full p-3 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter issue description..."
        />

        {/* Button */}
        <Button className="w-full">Submit</Button>
      </div>
    </div>
  );
};

export default NewIssuesPage;