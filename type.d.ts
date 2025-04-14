export type Profile = {
  name: string // 政治家名
  title: string // 肩書
  support: string // 支援団体
  party: string // 政党
  district: string // 選挙区
  image: string // 画像URL
}

export type Support = {
  id: string // ID
  name: string // 支援団体名
}

export type Summary = {
  income: number // 収入合計
  expense: number // 支出合計
  balance: number // 年間収支
  year: number // 対象年
}

export type Metadata = {
  source: string // データ引用元
  orgType: string // 政治団体の区分
  orgName: string // 政治団体の名称
  activityArea: string // 活動区域の区分
  representative: string // 代表者
  fundManagementOrg: string // 資金管理団体の指定
  accountingManager: string // 会計責任者
  administrativeManager: string // 事務担当者
  lastUpdate: string // 最終更新日
}

export type Flow = {
  id: string // ID
  name: string // 項目名
  direction: 'income'|'expense' // 収入or支出
  value: number // 金額
  parent: string | null // 親要素のID
}

export type Transaction = {
  id: string // ID
  name: string // 項目名
  category: string // カテゴリー名
  date: string // 日付
  value: number // 金額
  percentage: number // 割合
}
