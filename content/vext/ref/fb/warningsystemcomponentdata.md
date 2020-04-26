---
title: WarningSystemComponentData
---

Inherits from [ComponentData](/vext/ref/fb/componentdata)

## Summary

### Constructors

|  |
| --- |
| **[WarningSystemComponentData](#constructor-0)**() |
| **[WarningSystemComponentData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[WarningSystemComponentData](#constructor-2)**(other: [ComponentData](/vext/ref/fb/componentdata)) |
| **[WarningSystemComponentData](#constructor-3)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[WarningSystemComponentData](#constructor-4)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[WarningSystemComponentData](#constructor-5)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "aimWarnSoundEffect" >}} | [SoundAsset](/vext/ref/fb/soundasset) \| nil |
| {{< prop "missileWarnSoundEffect" >}} | [SoundAsset](/vext/ref/fb/soundasset) \| nil |
| {{< prop "lowHealthWarnSoundEffect" >}} | [SoundAsset](/vext/ref/fb/soundasset) \| nil |
| {{< prop "lockingWarnSoundEffect" >}} | [SoundAsset](/vext/ref/fb/soundasset) \| nil |
| {{< prop "lockedWarnSoundEffect" >}} | [SoundAsset](/vext/ref/fb/soundasset) \| nil |
| {{< prop "playerType" >}} | [WarningPlayerType](/vext/ref/fb/warningplayertype) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "WarningSystemComponentData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### WarningSystemComponentData {#constructor-0}

> **WarningSystemComponentData**()

Creates a new [WarningSystemComponentData](/vext/ref/fb/warningsystemcomponentdata) frostbite instance.

### WarningSystemComponentData {#constructor-1}

> **WarningSystemComponentData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [WarningSystemComponentData](/vext/ref/fb/warningsystemcomponentdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### WarningSystemComponentData {#constructor-2}

> **WarningSystemComponentData**(other: [ComponentData](/vext/ref/fb/componentdata))

Casts an instance of type [ComponentData](/vext/ref/fb/componentdata) to [WarningSystemComponentData](/vext/ref/fb/warningsystemcomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [ComponentData](/vext/ref/fb/componentdata) | The instance to cast to [WarningSystemComponentData](/vext/ref/fb/warningsystemcomponentdata). |

### WarningSystemComponentData {#constructor-3}

> **WarningSystemComponentData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [WarningSystemComponentData](/vext/ref/fb/warningsystemcomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [WarningSystemComponentData](/vext/ref/fb/warningsystemcomponentdata). |

### WarningSystemComponentData {#constructor-4}

> **WarningSystemComponentData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [WarningSystemComponentData](/vext/ref/fb/warningsystemcomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [WarningSystemComponentData](/vext/ref/fb/warningsystemcomponentdata). |

### WarningSystemComponentData {#constructor-5}

> **WarningSystemComponentData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [WarningSystemComponentData](/vext/ref/fb/warningsystemcomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [WarningSystemComponentData](/vext/ref/fb/warningsystemcomponentdata). |

## Properties

### {{% prop-heading "aimWarnSoundEffect" %}}

> **[SoundAsset](/vext/ref/fb/soundasset)** \| **nil**

### {{% prop-heading "missileWarnSoundEffect" %}}

> **[SoundAsset](/vext/ref/fb/soundasset)** \| **nil**

### {{% prop-heading "lowHealthWarnSoundEffect" %}}

> **[SoundAsset](/vext/ref/fb/soundasset)** \| **nil**

### {{% prop-heading "lockingWarnSoundEffect" %}}

> **[SoundAsset](/vext/ref/fb/soundasset)** \| **nil**

### {{% prop-heading "lockedWarnSoundEffect" %}}

> **[SoundAsset](/vext/ref/fb/soundasset)** \| **nil**

### {{% prop-heading "playerType" %}}

> **[WarningPlayerType](/vext/ref/fb/warningplayertype)**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [WarningSystemComponentData](/vext/ref/fb/warningsystemcomponentdata) type.

