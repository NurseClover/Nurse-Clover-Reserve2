export async function loadTerms() {
  const res = await fetch('medical_terms_by_chapter.json');
  if (!res.ok) throw new Error('단어 목록을 불러올 수 없습니다.');
  return await res.json();
}

export async function getChapters() {
  const terms = await loadTerms();
  const chapters = [...new Set(terms.map(t => t.chapter))].sort();
  return ['전체', ...chapters];
}

export async function getTermsByChapter(chapter) {
  const terms = await loadTerms();
  return chapter === '전체'
    ? terms
    : terms.filter(t => t.chapter === chapter);
}
