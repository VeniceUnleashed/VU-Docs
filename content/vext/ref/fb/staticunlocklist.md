---
title: StaticUnlockList
---

Inherits from [Asset](/vext/ref/fb/asset)

## Summary

### Constructors

|  |
| --- |
| **[StaticUnlockList](#constructor-0)**() |
| **[StaticUnlockList](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[StaticUnlockList](#constructor-2)**(other: [Asset](/vext/ref/fb/asset)) |
| **[StaticUnlockList](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "unlockInfos" >}} | [BasicUnlockInfo](/vext/ref/fb/basicunlockinfo)[] |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "StaticUnlockList" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### StaticUnlockList {#constructor-0}

> **StaticUnlockList**()

Creates a new [StaticUnlockList](/vext/ref/fb/staticunlocklist) frostbite instance.

### StaticUnlockList {#constructor-1}

> **StaticUnlockList**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [StaticUnlockList](/vext/ref/fb/staticunlocklist) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### StaticUnlockList {#constructor-2}

> **StaticUnlockList**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [StaticUnlockList](/vext/ref/fb/staticunlocklist). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [StaticUnlockList](/vext/ref/fb/staticunlocklist). |

### StaticUnlockList {#constructor-3}

> **StaticUnlockList**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [StaticUnlockList](/vext/ref/fb/staticunlocklist). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [StaticUnlockList](/vext/ref/fb/staticunlocklist). |

## Properties

### {{% prop-heading "unlockInfos" %}}

> **[BasicUnlockInfo](/vext/ref/fb/basicunlockinfo)**[]

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [StaticUnlockList](/vext/ref/fb/staticunlocklist) type.

