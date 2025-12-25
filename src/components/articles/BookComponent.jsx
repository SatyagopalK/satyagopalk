import { Link } from 'react-router-dom'

export default function BookComponent({
                                          id,
                                          title,
                                          subtitle,
                                          description,
                                          image
                                      }) {
    return (
        <Link
            to={`/books/${id}`}
            className="block max-w-md p-4 hover:scale-[1.02] transition"
        >
            <img src={image} alt={title} className="rounded-md" />

            <h2 className="mt-3 text-xl font-semibold">{title}</h2>
            <p className="text-gray-500">{subtitle}</p>
            <p className="mt-2 text-sm">{description}</p>
        </Link>
    )
}
