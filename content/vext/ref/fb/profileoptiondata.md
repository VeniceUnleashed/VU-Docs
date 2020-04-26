---
title: ProfileOptionData
---

Inherits from [Asset](/vext/ref/fb/asset)

## Summary

### Constructors

|  |
| --- |
| **[ProfileOptionData](#constructor-0)**() |
| **[ProfileOptionData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[ProfileOptionData](#constructor-2)**(other: [Asset](/vext/ref/fb/asset)) |
| **[ProfileOptionData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "uniqueId" >}} | string |
| {{< prop "category" >}} | [ProfileOptionsType](/vext/ref/fb/profileoptionstype) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "ProfileOptionData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### ProfileOptionData {#constructor-0}

> **ProfileOptionData**()

Creates a new [ProfileOptionData](/vext/ref/fb/profileoptiondata) frostbite instance.

### ProfileOptionData {#constructor-1}

> **ProfileOptionData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [ProfileOptionData](/vext/ref/fb/profileoptiondata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### ProfileOptionData {#constructor-2}

> **ProfileOptionData**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [ProfileOptionData](/vext/ref/fb/profileoptiondata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [ProfileOptionData](/vext/ref/fb/profileoptiondata). |

### ProfileOptionData {#constructor-3}

> **ProfileOptionData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [ProfileOptionData](/vext/ref/fb/profileoptiondata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [ProfileOptionData](/vext/ref/fb/profileoptiondata). |

## Properties

### {{% prop-heading "uniqueId" %}}

> **string**

### {{% prop-heading "category" %}}

> **[ProfileOptionsType](/vext/ref/fb/profileoptionstype)**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [ProfileOptionData](/vext/ref/fb/profileoptiondata) type.

