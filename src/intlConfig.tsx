import React, { FC } from 'react'
import {
  FormattedMessage,
  useIntl,
  MessageDescriptor,
  IntlShape,
} from 'react-intl'
import { Rule } from 'antd/lib/form'

export const intlConfig = {
  locale: 'pt',
  messages: {
    add: 'Adicionar',
    'all.f': 'Todas',
    save: 'Salvar',
    'tenant.live': 'Ativo',
    'tenant.products': 'Produtos',
    'tenant.categories': 'Categorias',
    'tenant.categories.name': 'Nome da Categoria',
    'tenant.slug': 'Slug',
    'tenant.data.success': 'Dados salvos com sucesso',
    'tenant.data.error': 'Houve um erro ao salvar os dados :(',
    'tenant.categories.add': 'Adicionar Categoria',
    'tenant.categories.live': 'Ativa',
    'tenant.categories.edit': 'Editar Categoria',
    'tenant.categories.productCount': '{count} produtos',
    'tenant.categories.alreadyExists': 'Já existe uma categoria %s',
    'tenant.categories.addSuccess': 'Categoria cadastrada com sucesso',
    'tenant.categories.editSuccess': 'Categoria editada com sucesso',
    'tenant.categories.nameRequired': 'Você deve preencher o nome da categoria',
    'tenant.categories.nameMin': 'O nome deve ter pelo menos 4 caracteres',
    'tenant.categories.nameMax': 'O nome deve ter no máximo 30 caracteres',
    'tenant.edit': 'Editar',
    'tenant.sections.menu': 'Menu de Produtos',
    'tenant.sections.schedule': 'Horário de Funcionamento',
    'tenant.sections.logistics': 'Logística',
    'tenant.sections.payments': 'Meios de Pagamento',
    'tenant.noProducts': 'Não há produtos cadastrados.',
    'tenant.filterByName': 'Filtrar por Nome',
    'tenant.productNamePlaceholder': 'ex: Burguer',
    'tenant.filterByCategory': 'ou por Categoria',
    'tenant.selectCategory': 'Selecione a Categoria',
    'tenant.categories.noCategories': 'Você deve ter categorias cadastradas!',
    'tenant.product.name': 'Nome do Produto',
    'tenant.product.live': 'Disponível?',
    'tenant.product.category': 'Categoria',
    'tenant.product.categoryPlaceholder': 'Selecione a categoria',
    'tenant.product.description': 'Descrição',
    'tenant.product.display': 'Exibição',
    'tenant.product.displayMode': 'Modo de Exibição',
    'tenant.product.horizontal': 'Horizontal',
    'tenant.product.highlight': 'Destaque',
    'tenant.product.basePrice': 'Preço Base',
    'tenant.product.price': 'Preço',
    'tenant.product.offer': 'Oferta',
    'tenant.product.min': 'Mínimo',
    'tenant.product.max': 'Máximo',
    'tenant.product.assemblyOptions': 'Opções de Montagem',
    'tenant.product.fieldName': 'Nome do Campo',
    'tenant.product.placeholderField': 'ex: Sabor',
    'tenant.product.type': 'Tipo',
    'tenant.product.placeholderType': 'Selecione o tipo',
    'tenant.product.options': 'Opções',
    'tenant.product.optionName': 'Nome da Opção',
    'tenant.product.placeholderOption': 'Ex: Calabresa',
    'tenant.product.placeholderDescription': 'Ex: Contém Lactose',
    'tenant.product.initialQuantity': 'Quantidade Inicial',
    'tenant.product.removeItem': 'Remover Item',
    'tenant.product.removeOption': 'Remover Opção',
    'tenant.product.addItem': 'Adicionar Item',
    'tenant.product.addOption': 'Adicionar Opção',
    'tenant.product.addField': 'Adicionar Campo',
    'tenant.product.add': 'Adicionar Produto',
    'tenant.product.edit': 'Editar Produto',
    'tenant.product.shouldAddCategory':
      'Você deve primeiro adicionar uma categoria',
    'tenant.product.imgSrc': 'Imagem',
    'imageupload.extensionError': 'Envie um arquivo .png ou .jpg válido',
    'imageupload.success': 'Imagem enviada com sucesso!',
    'imageupload.error': 'Ocorreu um erro ao enviar sua imagem',
    'imageupload.sending': 'Enviando...',
    'imageupload.upload': 'Upload',
    'imageupload.newImage': 'Nova Imagem',
    'imageupload.editImage': 'Edite a imagem',
    'tenant.shipping.success': 'Informações alteradas com sucesso',
    'tenant.shipping.deliveryFixed': 'Entrega com preço fixo',
    'tenant.shipping.deliveryFixedDesc':
      'Caso você determine um valor, este será somado automaticamente em cada compra caso o cliente escolha por Entrega',
    'tenant.shipping.errorFee': 'Informe a taxa',
    'tenant.shipping.takeAway': 'Retirada no Local',
    'tenant.shipping.takeAwayDesc':
      'O cliente poderá visualizar o endereço da sua unidade. Não é adicionada nenhuma taxa no pedido',
    'tenant.paymentMethods': 'Meios de Pagamento',
    'tenant.paymentForm.name': 'Nome',
    'tenant.paymentForm.namePlaceholder': 'Ex: Nubank',
    'tenant.paymentForm.checkForChange': 'Precisa de Troco?',
    'tenant.paymentForm.desc': 'Informações Extras',
    'tenant.paymentForm.imgSrc': 'Imagem',
    'tenant.paymentForm.add': 'Adicionar Meio de Pagamento',
    'tenant.paymentForm.success': 'Dados salvos com sucesso',
    'tenant.paymentForm.error': 'Houve um erro ao salvar os dados',
    'tenant.logistics.strategies': 'Modalidades',
    'tenant.address.success': 'Endereço atualizado com sucesso',
    'tenant.address.title': 'Endereço da Unidade',
    'tenant.hours.weekTitle': 'Horário Semanal',
    'tenant.hours.day': 'Dia (ou intervalo)',
    'tenant.hours.dayPlaceholder': 'Selecione',
    'tenant.hours.hourInterval': 'Intervalo de Horas',
    'tenant.hours.remove': 'Remover',
    'tenant.hours.addInterval': 'Adicionar Janela de Tempo',
    'tenant.name': 'Nome do seu negócio',
    'tenant.url': 'URL da sua página',
    'tenant.category': 'Categoria',
    'tenant.categoryPlaceholder': 'Selecione a categoria',
    'tenant.whatsapp': 'WhatsApp',
    'tenant.whatsappPlaceholder': 'ex: (83) 99934-2545',
    'tenant.instagram': 'Instagram',
    'tenant.logoSrc': 'Logomarca',
    'tenant.color': 'Cor do Tema',
    'tenant.data.nameRequired': 'Você deve preencher o nome do negócio',
    'tenant.data.nameMin': 'O nome deve ter pelo menos 4 caracteres',
    'tenant.data.nameMax': 'O nome deve ter no máximo 30 caracteres',
    'tenant.data.slugRequired': 'Você deve preencher a URL',
    'tenant.data.slugPattern': 'A URL não pode ter caracteres especiais',
    'tenant.data.whatsappRequired': 'Você deve preencher o Whatsapp',
    'tenant.data.instagramPattern': 'Forneça um usuário válido',
    mandatoryField: 'Este campo é obrigatório',
    'tenant.category.hamburgueria': 'Hamburgueria',
    'tenant.category.pizzaria': 'Pizzaria',
    'tenant.category.loja': 'Loja',
    'tenant.category.restaurante': 'Restaurante',
    'tenant.days.all': 'Todos os dias',
    'tenant.days.weekdays': 'De Seg a Sex',
    'tenant.days.weekend': 'Sábado e Domingo',
    'tenant.days.monday': 'Segunda-Feira',
    'tenant.days.tuesday': 'Segunda-Feira',
    'tenant.days.wednesday': 'Quarta-Feira',
    'tenant.days.thursday': 'Quinta-Feira',
    'tenant.days.friday': 'Sexta-Feira',
    'tenant.days.saturday': 'Sábado',
    'tenant.days.sunday': 'Domingo',
  },
}

interface MessageProps
  extends React.ComponentPropsWithoutRef<typeof FormattedMessage> {
  id: keyof typeof intlConfig['messages']
}

export const Message: FC<MessageProps> = ({ id, ...props }) => {
  return <FormattedMessage id={id} {...props} />
}

interface MyMessageDescriptor extends MessageDescriptor {
  id: keyof typeof intlConfig['messages']
}

export const useAltIntl = () => {
  const intl = useIntl()

  return {
    ...intl,
    formatMessage: (
      descriptor: MyMessageDescriptor,
      values?: Record<string, string>
    ) => intl.formatMessage(descriptor, values),
  }
}

type AltMessage = keyof typeof intlConfig['messages']

type IntlRule = {
  message?: AltMessage
  required?: boolean
  pattern?: RegExp
  min?: number
  max?: number
}

export type IntlRules = Record<string, IntlRule[]>

export type IntlSelect = Array<{ name: AltMessage; value: string }>

export const prepareSelect = (select: IntlSelect, intl: IntlShape) => {
  return select.map(({ name, value }) => ({
    value,
    name: intl.formatMessage({ id: name }),
  }))
}

export const prepareRules = (rules: IntlRules, intl: IntlShape) => {
  const fields = Object.keys(rules)

  return fields.reduce((acc, cur) => {
    const ruleArray = rules[cur]
    const localizedRules = ruleArray.map(({ message, ...rule }) => ({
      ...rule,
      message: intl.formatMessage({ id: message }),
    }))

    return {
      ...acc,
      [cur]: localizedRules,
    }
  }, {} as Record<string, Rule[]>)
}