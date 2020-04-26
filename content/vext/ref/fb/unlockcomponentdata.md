---
title: UnlockComponentData
---

Inherits from [ComponentData](/vext/ref/fb/componentdata)

## Summary

### Constructors

|  |
| --- |
| **[UnlockComponentData](#constructor-0)**() |
| **[UnlockComponentData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[UnlockComponentData](#constructor-2)**(other: [ComponentData](/vext/ref/fb/componentdata)) |
| **[UnlockComponentData](#constructor-3)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[UnlockComponentData](#constructor-4)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[UnlockComponentData](#constructor-5)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "unlockAsset" >}} | [UnlockAssetBase](/vext/ref/fb/unlockassetbase) \| nil |
| {{< prop "unlockDataKey" >}} | int |
| {{< prop "unlockableFromAllEntries" >}} | bool |
| {{< prop "invertUnlockTest" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "UnlockComponentData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### UnlockComponentData {#constructor-0}

> **UnlockComponentData**()

Creates a new [UnlockComponentData](/vext/ref/fb/unlockcomponentdata) frostbite instance.

### UnlockComponentData {#constructor-1}

> **UnlockComponentData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [UnlockComponentData](/vext/ref/fb/unlockcomponentdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### UnlockComponentData {#constructor-2}

> **UnlockComponentData**(other: [ComponentData](/vext/ref/fb/componentdata))

Casts an instance of type [ComponentData](/vext/ref/fb/componentdata) to [UnlockComponentData](/vext/ref/fb/unlockcomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [ComponentData](/vext/ref/fb/componentdata) | The instance to cast to [UnlockComponentData](/vext/ref/fb/unlockcomponentdata). |

### UnlockComponentData {#constructor-3}

> **UnlockComponentData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [UnlockComponentData](/vext/ref/fb/unlockcomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [UnlockComponentData](/vext/ref/fb/unlockcomponentdata). |

### UnlockComponentData {#constructor-4}

> **UnlockComponentData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [UnlockComponentData](/vext/ref/fb/unlockcomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [UnlockComponentData](/vext/ref/fb/unlockcomponentdata). |

### UnlockComponentData {#constructor-5}

> **UnlockComponentData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [UnlockComponentData](/vext/ref/fb/unlockcomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [UnlockComponentData](/vext/ref/fb/unlockcomponentdata). |

## Properties

### {{% prop-heading "unlockAsset" %}}

> **[UnlockAssetBase](/vext/ref/fb/unlockassetbase)** \| **nil**

### {{% prop-heading "unlockDataKey" %}}

> **int**

### {{% prop-heading "unlockableFromAllEntries" %}}

> **bool**

### {{% prop-heading "invertUnlockTest" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [UnlockComponentData](/vext/ref/fb/unlockcomponentdata) type.

