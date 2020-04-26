---
title: StatCategoriesBaseTree
---

Inherits from [TreeBase](/vext/ref/fb/treebase)

## Summary

### Constructors

|  |
| --- |
| **[StatCategoriesBaseTree](#constructor-0)**() |
| **[StatCategoriesBaseTree](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[StatCategoriesBaseTree](#constructor-2)**(other: [TreeBase](/vext/ref/fb/treebase)) |
| **[StatCategoriesBaseTree](#constructor-3)**(other: [Asset](/vext/ref/fb/asset)) |
| **[StatCategoriesBaseTree](#constructor-4)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "rootBaseCategories" >}} | [StatsCategoryBaseData](/vext/ref/fb/statscategorybasedata)[] |
| {{< prop "paramX" >}} | [CriteriaData](/vext/ref/fb/criteriadata)[] |
| {{< prop "paramY" >}} | [CriteriaData](/vext/ref/fb/criteriadata)[] |
| {{< prop "processAllLevelsInTree" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "StatCategoriesBaseTree" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### StatCategoriesBaseTree {#constructor-0}

> **StatCategoriesBaseTree**()

Creates a new [StatCategoriesBaseTree](/vext/ref/fb/statcategoriesbasetree) frostbite instance.

### StatCategoriesBaseTree {#constructor-1}

> **StatCategoriesBaseTree**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [StatCategoriesBaseTree](/vext/ref/fb/statcategoriesbasetree) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### StatCategoriesBaseTree {#constructor-2}

> **StatCategoriesBaseTree**(other: [TreeBase](/vext/ref/fb/treebase))

Casts an instance of type [TreeBase](/vext/ref/fb/treebase) to [StatCategoriesBaseTree](/vext/ref/fb/statcategoriesbasetree). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [TreeBase](/vext/ref/fb/treebase) | The instance to cast to [StatCategoriesBaseTree](/vext/ref/fb/statcategoriesbasetree). |

### StatCategoriesBaseTree {#constructor-3}

> **StatCategoriesBaseTree**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [StatCategoriesBaseTree](/vext/ref/fb/statcategoriesbasetree). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [StatCategoriesBaseTree](/vext/ref/fb/statcategoriesbasetree). |

### StatCategoriesBaseTree {#constructor-4}

> **StatCategoriesBaseTree**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [StatCategoriesBaseTree](/vext/ref/fb/statcategoriesbasetree). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [StatCategoriesBaseTree](/vext/ref/fb/statcategoriesbasetree). |

## Properties

### {{% prop-heading "rootBaseCategories" %}}

> **[StatsCategoryBaseData](/vext/ref/fb/statscategorybasedata)**[]

### {{% prop-heading "paramX" %}}

> **[CriteriaData](/vext/ref/fb/criteriadata)**[]

### {{% prop-heading "paramY" %}}

> **[CriteriaData](/vext/ref/fb/criteriadata)**[]

### {{% prop-heading "processAllLevelsInTree" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [StatCategoriesBaseTree](/vext/ref/fb/statcategoriesbasetree) type.

