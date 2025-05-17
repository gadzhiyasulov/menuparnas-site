import Link from "next/link";

const menu = {
  "🥗 Салаты": [
    { name: "Овощное ассорти", price: 360 },
    { name: "Сырное ассорти", price: 690 },
    { name: "Фруктовое ассорти", price: 830 },
  ],
  "🍛 Горячие блюда": [
    { name: "Бозартма", price: 490 },
    { name: "Бефстроганов", price: 610 },
    { name: "Телятина по-бакински", price: 690 },
  ],
};

export default function Home() {
  return (
    <div className="min-h-screen w-screen bg-zinc-50 overflow-x-hidden">
      <main className="max-w-screen-sm mx-auto px-4 py-6 text-center">
        <img
          src="/logo-parnas.png"
          alt="Parnas"
          className="w-16 h-auto mx-auto mb-3"
        />
        <h1 className="text-xl font-bold mb-1">Parnas</h1>
        <p className="text-sm text-gray-600 mb-4">
          Семейный ресторан · г. Кизилюрт
        </p>

        <Link
          href="/admin"
          className="inline-block border border-gray-300 px-4 py-1 rounded text-sm text-gray-600 hover:bg-gray-100 mb-6"
        >
          Вход в админ-панель
        </Link>

        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {Object.keys(menu).map((category) => (
            <a
              key={category}
              href={`#${category}`}
              className="text-sm bg-white border px-3 py-1 rounded shadow-sm hover:shadow"
            >
              {category}
            </a>
          ))}
        </div>

        {Object.entries(menu).map(([category, items]) => (
          <section key={category} id={category} className="mb-10">
            <h2 className="text-lg font-semibold mb-4">{category}</h2>
            <div className="space-y-3 text-left">
              {items.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center bg-white rounded-lg shadow p-3 text-sm"
                >
                  <span>{item.name}</span>
                  <span className="font-semibold">{item.price} ₽</span>
                </div>
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}