import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'

const features = [
    {
        name: 'Marketing Solutions',
        description:
            'Hera provides end-to-end marketing solutions, covering everything from brand strategy and digital advertising to content creation and social media management.',
        icon: CloudArrowUpIcon,
    },
    {
        name: 'Innovative Software Development',
        description:
            'Stay ahead of the curve with Hera\'s cutting- edge software solutions.We specialize in creating bespoke software tailored to your unique needs, ensuring efficiency, scalability, and a seamless user experience.',
        icon: LockClosedIcon,
    },
    {
        name: 'Strategic Digital Marketing Campaigns',
        description:
            'Our team at Hera crafts strategic digital marketing campaigns to boost your online presence. From SEO optimization to targeted ad campaigns, we ensure your brand is seen by the right audience at the right time.',
        icon: ArrowPathIcon,
    },
    {
        name: 'Automation for Efficiency',
        description:
            'Streamline your workflows with Hera\'s automation tools.From marketing tasks to internal processes, automation enhances efficiency, reduces manual workload, and accelerates your business operations.',
        icon: FingerPrintIcon,
    },
    {
        name: 'API Integration',
        description:
            'Hera seamlessly integrates with a variety of APIs, allowing your software systems to communicate effortlessly with external platforms. Unlock new possibilities, enhance functionality, and improve connectivity with our dynamic API integration solutions.',
        icon: FingerPrintIcon,
    },
    {
        name: 'Professional-Grade Video Editing Suite',
        description:
            'Elevate your visual content with Hera\'s advanced video editing tools.Our comprehensive suite empowers you to create professional and engaging videos effortlessly.From intricate edits to adding dynamic effects, Hera\'s video editing capabilities are designed to bring your creative vision to life with finesse.',
        icon: FingerPrintIcon,
    },
]

export default function Features() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base font-semibold leading-7 text-indigo-600">Deploy faster</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Everything you need to grow your business
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Empower your business with cutting-edge solutions at Hera.
                        From dynamic software development to strategic marketing campaigns, we specialize in crafting digital excellence.
                        Elevate your brand, engage your audience, and achieve unprecedented success. Discover the future of innovation with Hera.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                        {features.map((feature) => (
                            <div key={feature.name} className="relative pl-16">
                                <dt className="text-base font-semibold leading-7 text-gray-900">
                                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                    </div>
                                    {feature.name}
                                </dt>
                                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}
