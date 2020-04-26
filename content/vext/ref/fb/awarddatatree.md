---
title: AwardDataTree
---

Inherits from [AwardableTreeBase](/vext/ref/fb/awardabletreebase)

## Summary

### Constructors

|  |
| --- |
| **[AwardDataTree](#constructor-0)**() |
| **[AwardDataTree](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[AwardDataTree](#constructor-2)**(other: [AwardableTreeBase](/vext/ref/fb/awardabletreebase)) |
| **[AwardDataTree](#constructor-3)**(other: [TreeBase](/vext/ref/fb/treebase)) |
| **[AwardDataTree](#constructor-4)**(other: [Asset](/vext/ref/fb/asset)) |
| **[AwardDataTree](#constructor-5)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "filteredAwards" >}} | [AwardData](/vext/ref/fb/awarddata)[] |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "AwardDataTree" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### AwardDataTree {#constructor-0}

> **AwardDataTree**()

Creates a new [AwardDataTree](/vext/ref/fb/awarddatatree) frostbite instance.

### AwardDataTree {#constructor-1}

> **AwardDataTree**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [AwardDataTree](/vext/ref/fb/awarddatatree) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### AwardDataTree {#constructor-2}

> **AwardDataTree**(other: [AwardableTreeBase](/vext/ref/fb/awardabletreebase))

Casts an instance of type [AwardableTreeBase](/vext/ref/fb/awardabletreebase) to [AwardDataTree](/vext/ref/fb/awarddatatree). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [AwardableTreeBase](/vext/ref/fb/awardabletreebase) | The instance to cast to [AwardDataTree](/vext/ref/fb/awarddatatree). |

### AwardDataTree {#constructor-3}

> **AwardDataTree**(other: [TreeBase](/vext/ref/fb/treebase))

Casts an instance of type [TreeBase](/vext/ref/fb/treebase) to [AwardDataTree](/vext/ref/fb/awarddatatree). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [TreeBase](/vext/ref/fb/treebase) | The instance to cast to [AwardDataTree](/vext/ref/fb/awarddatatree). |

### AwardDataTree {#constructor-4}

> **AwardDataTree**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [AwardDataTree](/vext/ref/fb/awarddatatree). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [AwardDataTree](/vext/ref/fb/awarddatatree). |

### AwardDataTree {#constructor-5}

> **AwardDataTree**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [AwardDataTree](/vext/ref/fb/awarddatatree). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [AwardDataTree](/vext/ref/fb/awarddatatree). |

## Properties

### {{% prop-heading "filteredAwards" %}}

> **[AwardData](/vext/ref/fb/awarddata)**[]

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [AwardDataTree](/vext/ref/fb/awarddatatree) type.

