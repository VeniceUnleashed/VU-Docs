---
title: StatCategoryTreeCollection
---

Inherits from 
[Asset](/vext/ref/fb/asset)

## Summary
### Constructors
| |
| ----------- |
| **[StatCategoryTreeCollection](#constructor-0)**() |
| **[StatCategoryTreeCollection](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[StatCategoryTreeCollection](#constructor-2)**(other: [Asset](/vext/ref/fb/asset)) |
| **[StatCategoryTreeCollection](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "categoryTrees" >}} | [StatCategoriesBaseTree](/vext/ref/fb/statcategoriesbasetree)[] |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "StatCategoryTreeCollection" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### StatCategoryTreeCollection {#constructor-0}
> **StatCategoryTreeCollection**()

Creates a new [StatCategoryTreeCollection](/vext/ref/fb/statcategorytreecollection) frostbite instance.

### StatCategoryTreeCollection {#constructor-1}
> **StatCategoryTreeCollection**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [StatCategoryTreeCollection](/vext/ref/fb/statcategorytreecollection) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### StatCategoryTreeCollection {#constructor-2}
> **StatCategoryTreeCollection**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [StatCategoryTreeCollection](/vext/ref/fb/statcategorytreecollection). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [StatCategoryTreeCollection](/vext/ref/fb/statcategorytreecollection). |

### StatCategoryTreeCollection {#constructor-3}
> **StatCategoryTreeCollection**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [StatCategoryTreeCollection](/vext/ref/fb/statcategorytreecollection). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [StatCategoryTreeCollection](/vext/ref/fb/statcategorytreecollection). |

## Properties
### {{% prop-heading "categoryTrees" %}}
> **[StatCategoriesBaseTree](/vext/ref/fb/statcategoriesbasetree)**[]

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [StatCategoryTreeCollection](/vext/ref/fb/statcategorytreecollection) type.

