export default function Example() {
    return (
        <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
            <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
            <div className="mx-auto max-w-2xl lg:max-w-4xl">
                <img className="mx-auto h-12" src="./src/assets/AD-LOGO-1.png" alt="" />
                <figure className="mt-10">
                    <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                        <p>
                            “The job originally planned very well and the team was patient and take time to explain in detail even with a video to help me understand.”
                        </p>
                    </blockquote>
                    <figcaption className="mt-10">
                        <img
                            className="mx-auto h-10 w-10 rounded-full"
                            src="https://hera-react.s3.us-east-1.amazonaws.com/AD-LOGO-1.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDGV1LWNlbnRyYWwtMSJHMEUCIBN2WEUPQxbqUSLQpiEdYnIvSN5F6kwY50rIjRxOlrS%2FAiEAum5Bri7KpbgdAQaHD8hnUXf4ZNFUECD2xp%2BRZFAxrA4q7QIIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARABGgw2MTUzNDI2MzEzMTYiDI%2FSbb39GYj5hTBpeSrBAhSramX3pVqyj6OsxCdRfM9BK0TrFKiMdtJdjQyB629WRlhRdRKOOvoFuK%2FnpSHTtkAt7ZPiMAOzNbE03wEPtg7hWCTZmZiVOzqS9xbTae4%2BO5RHQfzsxK7tV98ZrToSRrCEL%2B5JbLQ3HqNl%2Ft8u0cjX9XxGRLM0yzg%2FBqG4zibmGQDnDm0stAV%2B4P4eSFXOksDmZeAHyhjbxpTk8mbFePJlELQciYavvoyra3ArPgVW5JkQq07A5c7KS8QVb9oTB0rUflwPH5OcBTVVrvCfXFG3lKgIP7YDumpvExsmZ26TZPSvSiEJNQ%2Br7TC3Bmcoo1ccr558ePAS8W0s%2BhSZEm6revnP2F1LawHGL%2BDEbJgvvHffUymS1UDGf5JaOPg7RXJnzOiYZ%2BChNH1fIbaZKtUoo%2Fh%2BaoiOQv0tp5aOMODUaDD%2F75OtBjqzAslhNhSZ7mdLtFdaATsEa2er0JTq79Su3L7rDIEAlzx89wrPdNcEKMKNxA%2FoE7PmI0Gw5%2BGs7HNwI4dT3HLiYxHcG%2BDzxxKE%2FeQA00QqG9vb47cRss9atPp38HptJwSdOvTKRIQqyWaqaBNJ5S%2FuiBKy7vbXBuKrTaL3uemfhlF8IOqcC%2FgeyztARHhQGqaD6H4BoBVVQS6IxPenhC3I1kk9I6NTYvF%2FHvBsAIiG8PcTdeILyuQYSa3aHTjIKF0xIFj%2FG77Fu3jguGw4t8BW1WXzT2FyDnVx0iZEFWOekRC4anM%2BxtGsZTeCYKURTSP60bJhZAxE7JKzh4MqGCBKHW8hMR06aKPCkzzD%2BPz176UGSgKygFMaLdyjTP5f0pxTYyQOz6yLaF5jlnbSUt6zTjhZ77I%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240115T105536Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAY6RKHNGKKXCGK2IS%2F20240115%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=59dc5c865a3e840200771ad41b58437e3dcf384cd25a79d0df032b495bfa75a2"
                            alt=""
                        />
                        <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                            <div className="font-semibold text-gray-900">April Diane</div>
                            <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-gray-900">
                                <circle cx={1} cy={1} r={1} />
                            </svg>
                            <div className="text-gray-600">CEO of aprildiane.com</div>
                        </div>
                    </figcaption>
                </figure>
            </div>
        </section>
    )
}
