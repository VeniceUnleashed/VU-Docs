---
title: AwardableTreeBase
---

Inherits from [TreeBase](/vext/ref/fb/treebase)

## Summary

### Constructors

|  |
| --- |
| **[AwardableTreeBase](#constructor-0)**() |
| **[AwardableTreeBase](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[AwardableTreeBase](#constructor-2)**(other: [TreeBase](/vext/ref/fb/treebase)) |
| **[AwardableTreeBase](#constructor-3)**(other: [Asset](/vext/ref/fb/asset)) |
| **[AwardableTreeBase](#constructor-4)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "statCategoryTreeCollection" >}} | [StatCategoryTreeCollection](/vext/ref/fb/statcategorytreecollection) \| nil |
| {{< prop "generalCriteria" >}} | [CriteriaData](/vext/ref/fb/criteriadata)[] |
| {{< prop "generalStatistics" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "AwardableTreeBase" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### AwardableTreeBase {#constructor-0}

> **AwardableTreeBase**()

Creates a new [AwardableTreeBase](/vext/ref/fb/awardabletreebase) frostbite instance.

### AwardableTreeBase {#constructor-1}

> **AwardableTreeBase**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [AwardableTreeBase](/vext/ref/fb/awardabletreebase) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### AwardableTreeBase {#constructor-2}

> **AwardableTreeBase**(other: [TreeBase](/vext/ref/fb/treebase))

Casts an instance of type [TreeBase](/vext/ref/fb/treebase) to [AwardableTreeBase](/vext/ref/fb/awardabletreebase). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [TreeBase](/vext/ref/fb/treebase) | The instance to cast to [AwardableTreeBase](/vext/ref/fb/awardabletreebase). |

### AwardableTreeBase {#constructor-3}

> **AwardableTreeBase**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [AwardableTreeBase](/vext/ref/fb/awardabletreebase). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [AwardableTreeBase](/vext/ref/fb/awardabletreebase). |

### AwardableTreeBase {#constructor-4}

> **AwardableTreeBase**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [AwardableTreeBase](/vext/ref/fb/awardabletreebase). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [AwardableTreeBase](/vext/ref/fb/awardabletreebase). |

## Properties

### {{% prop-heading "statCategoryTreeCollection" %}}

> **[StatCategoryTreeCollection](/vext/ref/fb/statcategorytreecollection)** \| **nil**

### {{% prop-heading "generalCriteria" %}}

> **[CriteriaData](/vext/ref/fb/criteriadata)**[]

### {{% prop-heading "generalStatistics" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [AwardableTreeBase](/vext/ref/fb/awardabletreebase) type.

