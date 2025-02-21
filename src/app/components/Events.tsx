"use client";
import React from "react";
import { motion } from "framer-motion";

const Events = () => {
        return (
                <div id="events" className="bg-white py-16">
                        <div className="container mx-auto px-4 lg:px-8">
                                {/* Title Section */}
                                <motion.h2
                                        className="text-4xl font-bold mb-8 text-center"
                                        initial={{ opacity: 0, y: -20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5 }}
                                >
                                        <span className="text-pink-500 underline">EVENTS</span>
                                </motion.h2>

                                {/* Sessions and Workshops Section Side-by-Side */}
                                <div className="flex flex-col lg:flex-row gap-8">
                                        {/* Sessions Section */}
                                        <motion.div
                                                className="lg:w-1/2"
                                                initial={{ opacity: 0, x: -50 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.5, delay: 0.4 }}
                                        >
                                                <h3 className="text-2xl font-semibold mb-4 text-pink-500 underline">Special Sessions</h3>
                                                <p className="mb-4 text-gray-700 text-justify">
                                                        Call for Special Session Proposals
                                                </p>
                                                <p className="mb-4 text-gray-700 text-justify">
                                                        The organizers request researchers working in the conference domain to propose Special Sessions
                                                        in the International Conference on Women Researchers in Electronics and Computing (WREC2025),
                                                        scheduled for 18th-20th April 2025 at NIT Jalandhar. Please submit your proposal for a Special Session
                                                        in MS Word format to <a href="mailto:wrec@nitj.ac.in" className="text-blue-600 hover:underline">wrec@nitj.ac.in</a>.
                                                </p>
                                                <p className="mb-4 text-gray-700 text-justify">
                                                        <strong>Benefit of Special Session:</strong> Special Session provides an opportunity to the researchers
                                                        to promote emerging topics related to the conference theme, which are not included in the list of
                                                        conference tracks.
                                                </p>

                                                {/* Link to Download Special Session Format */}
                                                <p className="mb-6 text-center">
                                                        <a href="/WREC2025Special Session Page.docx" className="text-blue-600 hover:underline" download>
                                                                Download Special Session Format
                                                        </a>
                                                </p>

                                                <div className="mb-4 text-gray-700 text-justify">
                                                        <strong>Important Dates for Special Sessions:</strong>
                                                        <ul className="list-disc ml-5">
                                                                <li>Last date for submission of proposals: 28th February 2025</li>
                                                                <li>Notification of decision: 5th March 2025 or before</li>
                                                        </ul>
                                                </div>
                                                <p className="text-gray-700 text-justify">
                                                        <strong>Complimentary Conference Registration: <br /><br />
                                                        </strong>
                                                        For each successfully organized Special Session, one complimentary registration will be provided.
                                                </p>

                                                {/* Instructions for Special Session Organizers */}
                                                <div className="mt-6 text-gray-700 text-justify">
                                                        <h4 className="text-xl font-semibold mb-2 text-pink-500">Instructions to Special Session Organizers:</h4>
                                                        <ul className="list-disc ml-5 space-y-2">
                                                                <li>Once the Special Session gets approved, it is the duty of the Special Session organizers to publicize it among other researchers who work in that field and get at least 8 papers to be registered in the conference from different institutions.</li>
                                                                <li>The respective Special Session chairs are responsible for organizing the review process, assuring at least three reviews per paper.</li>
                                                                <li>The Special Session chairs should avoid any conflict of interest. To ensure a fair review process, any conflict must be marked in the submission system itself.</li>
                                                                <li>If any Special Session has low papers, then the accepted papers will be allocated to regular sessions wherever possible, and that Special Session will be cancelled out.</li>
                                                                <li>The Special Session organizers must consider that for accepted papers an individual cannot be author or co-author of more than two papers submitted to the individual Special Session.</li>
                                                                <li>The Special Session organizers must ensure an acceptance ratio within 30% of the total papers submitted in that Special Session.</li>
                                                        </ul>
                                                </div>
                                        </motion.div>

                                        {/* Workshops Section */}
                                        <motion.div
                                                className="lg:w-1/2"
                                                initial={{ opacity: 0, x: 50 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.5, delay: 0.4 }}
                                        >
                                                <h3 className="text-2xl font-semibold mb-4 text-pink-500 underline">Workshops</h3>
                                                <p className="mb-4 text-gray-700 text-justify">
                                                        In addition to existing technical presentations, industry forums, and exhibitions, WREC 2025 will
                                                        feature a series of half and full-day workshops. A workshop aims to provide an opportunity for
                                                        participants from academia, industry, government, and other related parties to present and discuss
                                                        novel ideas on current and emerging topics relevant to the conference theme.
                                                </p>
                                                <p className="mb-4 text-gray-700 text-justify">
                                                        <strong>Workshop Proposal Format</strong>
                                                </p>
                                                <div className="mb-4 text-gray-700 text-justify">
                                                        <strong>Proposal Requirements: <br /><br />
                                                        </strong>
                                                        Each workshop proposal (maximum 5-6 pages) must include the following:
                                                        <ul className="list-decimal ml-5">
                                                                <li>Title of the workshop</li>
                                                                <li>Workshop Organisers (names, affiliation, and contact information)</li>
                                                                <li>Scope and topics of the workshop (max 1 page)</li>
                                                                <li>Rationale (max 1 page): Importance, relevance, and attraction potential of the topic</li>
                                                                <li>A short biography of the organisers (up to 200 words per organiser)</li>
                                                                <li>Planned format of the workshop, including duration and schedule</li>
                                                                <li>A description of the publicity and promotion plan</li>
                                                                <li>A description of past versions of the workshop (if applicable)</li>
                                                        </ul>
                                                </div>
                                                <p className="mb-4 text-gray-700 text-justify">
                                                        <strong>How to Submit a Workshop Proposal?<br /><br />
                                                        </strong>
                                                        Proposals should be submitted in a PDF file, not exceeding 5-6 pages, for review to <a href="mailto:wrec@nitj.ac.in" className="text-blue-600 hover:underline">wrec@nitj.ac.in</a>.
                                                        The selected workshop will be held during the conference dates for the benefit of the conference attendees.
                                                </p>
                                                <p className="mb-4 text-gray-700 text-justify">
                                                        <strong>Selection Process: <br /><br />
                                                        </strong>
                                                        All workshop proposals will be peer-reviewed. The Workshop Chairs will make a final selection to ensure
                                                        variety and relevance to the conference attendees and to best fit the conference schedule.
                                                </p>
                                                <div className="text-gray-700 text-justify">
                                                        <strong>Important Dates: <br /><br />
                                                        </strong>
                                                        <ul className="list-disc ml-5">
                                                                <li>Proposal Submission Deadline: February 128, 2025</li>
                                                                <li>Notification of Selection: March 5, 2025</li>
                                                        </ul>
                                                </div>
                                        </motion.div>
                                </div>
                        </div>
                </div>
        );
};

export default Events;
