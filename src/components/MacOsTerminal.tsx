import React from 'react';

interface Props {
    fontClassName: string
}

const MacOSTerminal = ({ fontClassName }: Props) => {


    return (
        <div className={`w-full max-w-3xl mx-auto py-4 ${fontClassName}`}>
            {/* Terminal Window */}
            <div className="rounded-lg shadow-2xl overflow-hidden bg-zinc-900 border border-zinc-700">
                {/* Terminal Header */}
                <div className="bg-zinc-800 px-4 py-3 flex items-center justify-between">
                    {/* Traffic Light Buttons */}
                    <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors cursor-pointer"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors cursor-pointer"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors cursor-pointer"></div>
                    </div>

                    {/* Terminal Title */}
                    <div className="absolute left-1/2 transform -translate-x-1/2">
                        <p className="text-sm text-zinc-400 font-medium">terminal — zsh</p>
                    </div>

                    {/* Empty right side for balance */}
                    <div className="w-14"></div>
                </div>

                {/* Terminal Body */}
                <div className="bg-zinc-900 p-4 font-mono text-sm">
                    {/* Command Lines */}
                    <div className="space-y-2">
                        {/* Last login */}
                        <div className="text-gray-500">
                            Last login: {new Date().toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
                        </div>

                        {/* Command 1 */}
                        <div className="flex items-start">
                            <span className="text-green-400 mr-2">➜</span>
                            <span className="text-cyan-400 mr-2">~</span>
                            <span className="text-gray-100">git status</span>
                        </div>

                        {/* Git status output */}
                        <div className="text-gray-400 ml-6">
                            <div>On branch main</div>
                            <div>Your branch is up to date with {"'origin/main'"}.</div>
                            <div className="mt-2">nothing to commit, working tree clean</div>
                        </div>

                        {/* Command 2 */}
                        <div className="flex items-start mt-4">
                            <span className="text-green-400 mr-2">➜</span>
                            <span className="text-cyan-400 mr-2">~</span>
                            <span className="text-gray-100">npm run dev</span>
                        </div>

                        {/* NPM output */}
                        <div className="text-gray-400 ml-6 mt-2">
                            <div className="text-gray-500">&gt; my-app@0.1.0 dev</div>
                            <div className="text-gray-500">&gt; next dev</div>
                            <div className="mt-2 text-cyan-400">▲ Next.js 14.0.0</div>
                            <div className="text-gray-400">- Local: <span className="text-cyan-400 underline">http://localhost:3000</span></div>
                            <div className="mt-2 text-green-400">✓ Ready in 1.2s</div>
                        </div>

                        {/* Current prompt with cursor */}
                        <div className="flex items-start mt-4">
                            <span className="text-green-400 mr-2">➜</span>
                            <span className="text-cyan-400 mr-2">~</span>
                            <span className="text-gray-100">
                                <span className="inline-block w-2 h-4 bg-gray-100 animate-pulse"></span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MacOSTerminal;