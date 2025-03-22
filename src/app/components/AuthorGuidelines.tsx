import React from "react";

const AuthorGuideline = () => {
        return (
                <section id="authorguidelines" className="p-8 bg-white text-gray-900 max-w-4xl mx-auto rounded-2xl shadow-lg">
                        <h1 className="text-4xl font-bold mb-6 text-center">
                                <span className="text-pink-500">AUHTOR</span> GUIDELINES
                        </h1>


                        {/* Submission Guidelines */}
                        <div className="mb-8">
                                <h2 className="text-2xl font-semibold mb-3 text-pink-500">
                                        Submission Guidelines
                                </h2>
                                <p className="text-base leading-relaxed">
                                        Authors are invited to submit original, unpublished research papers
                                        describing significant and innovative work. Submissions must follow
                                        the provided formatting instructions. All papers must be submitted
                                        electronically via the conference submission portal.
                                </p>
                        </div>

                        {/* Formatting Instructions */}
                        <div className="mb-8">
                                <h2 className="text-2xl font-semibold mb-3 text-pink-500">
                                        Formatting Instructions
                                </h2>
                                <ul className="list-disc list-inside space-y-2 text-gray-800">
                                        <li>The paper length must be 6-10 pages. For additional pages (upto 2 pages), the authors have to pay Rs. 1000/- or $50 per page.</li>
                                        <li>Papers must be written in English.</li>
                                        <li>Use the Springer LNCS template (LaTeX or Word formats).</li>
                                        <li>All figures and tables should be clear, legible, and numbered.</li>
                                        <li>References must adhere to the Springer citation style.</li>
                                </ul>
                        </div>

                        {/* Review Process */}
                        <div className="mb-8">
                                <h2 className="text-2xl font-semibold mb-3 text-pink-500">
                                        Review Process
                                </h2>
                                <p className="text-base leading-relaxed">
                                        All submissions will undergo a rigorous double-blind peer-review process.
                                        Each paper will be reviewed by at least two independent reviewers,
                                        based on originality, significance, technical quality, and clarity.
                                </p>
                        </div>

                        {/* Publication */}
                        <div className="mb-8">
                                <h2 className="text-2xl font-semibold mb-3 text-pink-500">
                                        Publication
                                </h2>
                                <p className="text-base leading-relaxed">
                                        All accepted papers will be published in the conference proceedings
                                        and submitted to Springer for inclusion in the Lecture Notes in
                                        Electrical Engineering (LNEE) series. The proceedings will be
                                        submitted for indexing in Scopus.
                                </p>
                        </div>

                </section>
        );
};

export default AuthorGuideline;
