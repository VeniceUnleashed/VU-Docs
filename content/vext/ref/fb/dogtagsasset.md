---
title: DogTagsAsset
---

Inherits from [Asset](/vext/ref/fb/asset)

## Summary

### Constructors

|  |
| --- |
| **[DogTagsAsset](#constructor-0)**() |
| **[DogTagsAsset](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[DogTagsAsset](#constructor-2)**(other: [Asset](/vext/ref/fb/asset)) |
| **[DogTagsAsset](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "meleeKillWeapon" >}} | [StatsCategoryWeaponData](/vext/ref/fb/statscategoryweapondata) \| nil |
| {{< prop "basicDogTags" >}} | [BasicDogTagData](/vext/ref/fb/basicdogtagdata)[] |
| {{< prop "advancedDogTags" >}} | [AdvancedDogTagData](/vext/ref/fb/advanceddogtagdata)[] |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "DogTagsAsset" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### DogTagsAsset {#constructor-0}

> **DogTagsAsset**()

Creates a new [DogTagsAsset](/vext/ref/fb/dogtagsasset) frostbite instance.

### DogTagsAsset {#constructor-1}

> **DogTagsAsset**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [DogTagsAsset](/vext/ref/fb/dogtagsasset) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### DogTagsAsset {#constructor-2}

> **DogTagsAsset**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [DogTagsAsset](/vext/ref/fb/dogtagsasset). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [DogTagsAsset](/vext/ref/fb/dogtagsasset). |

### DogTagsAsset {#constructor-3}

> **DogTagsAsset**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [DogTagsAsset](/vext/ref/fb/dogtagsasset). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [DogTagsAsset](/vext/ref/fb/dogtagsasset). |

## Properties

### {{% prop-heading "meleeKillWeapon" %}}

> **[StatsCategoryWeaponData](/vext/ref/fb/statscategoryweapondata)** \| **nil**

### {{% prop-heading "basicDogTags" %}}

> **[BasicDogTagData](/vext/ref/fb/basicdogtagdata)**[]

### {{% prop-heading "advancedDogTags" %}}

> **[AdvancedDogTagData](/vext/ref/fb/advanceddogtagdata)**[]

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [DogTagsAsset](/vext/ref/fb/dogtagsasset) type.

