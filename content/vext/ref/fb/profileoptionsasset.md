---
title: ProfileOptionsAsset
---

Inherits from [Asset](/vext/ref/fb/asset)

## Summary

### Constructors

|  |
| --- |
| **[ProfileOptionsAsset](#constructor-0)**() |
| **[ProfileOptionsAsset](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[ProfileOptionsAsset](#constructor-2)**(other: [Asset](/vext/ref/fb/asset)) |
| **[ProfileOptionsAsset](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "fileName" >}} | string |
| {{< prop "contentName" >}} | string |
| {{< prop "fileSize" >}} | int |
| {{< prop "options" >}} | [ProfileOptionData](/vext/ref/fb/profileoptiondata)[] |
| {{< prop "autoSaveOnQuit" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "ProfileOptionsAsset" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### ProfileOptionsAsset {#constructor-0}

> **ProfileOptionsAsset**()

Creates a new [ProfileOptionsAsset](/vext/ref/fb/profileoptionsasset) frostbite instance.

### ProfileOptionsAsset {#constructor-1}

> **ProfileOptionsAsset**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [ProfileOptionsAsset](/vext/ref/fb/profileoptionsasset) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### ProfileOptionsAsset {#constructor-2}

> **ProfileOptionsAsset**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [ProfileOptionsAsset](/vext/ref/fb/profileoptionsasset). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [ProfileOptionsAsset](/vext/ref/fb/profileoptionsasset). |

### ProfileOptionsAsset {#constructor-3}

> **ProfileOptionsAsset**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [ProfileOptionsAsset](/vext/ref/fb/profileoptionsasset). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [ProfileOptionsAsset](/vext/ref/fb/profileoptionsasset). |

## Properties

### {{% prop-heading "fileName" %}}

> **string**

### {{% prop-heading "contentName" %}}

> **string**

### {{% prop-heading "fileSize" %}}

> **int**

### {{% prop-heading "options" %}}

> **[ProfileOptionData](/vext/ref/fb/profileoptiondata)**[]

### {{% prop-heading "autoSaveOnQuit" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [ProfileOptionsAsset](/vext/ref/fb/profileoptionsasset) type.

