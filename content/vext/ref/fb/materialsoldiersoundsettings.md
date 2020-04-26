---
title: MaterialSoldierSoundSettings
---

Inherits from [DataContainer](/vext/ref/shared/type/datacontainer)

## Summary

### Constructors

|  |
| --- |
| **[MaterialSoldierSoundSettings](#constructor-0)**() |
| **[MaterialSoldierSoundSettings](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[MaterialSoldierSoundSettings](#constructor-2)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "footStepSound" >}} | [SoundAsset](/vext/ref/fb/soundasset) \| nil |
| {{< prop "proneSound" >}} | [SoundAsset](/vext/ref/fb/soundasset) \| nil |
| {{< prop "landSound" >}} | [SoundAsset](/vext/ref/fb/soundasset) \| nil |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "MaterialSoldierSoundSettings" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### MaterialSoldierSoundSettings {#constructor-0}

> **MaterialSoldierSoundSettings**()

Creates a new [MaterialSoldierSoundSettings](/vext/ref/fb/materialsoldiersoundsettings) frostbite instance.

### MaterialSoldierSoundSettings {#constructor-1}

> **MaterialSoldierSoundSettings**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [MaterialSoldierSoundSettings](/vext/ref/fb/materialsoldiersoundsettings) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### MaterialSoldierSoundSettings {#constructor-2}

> **MaterialSoldierSoundSettings**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [MaterialSoldierSoundSettings](/vext/ref/fb/materialsoldiersoundsettings). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [MaterialSoldierSoundSettings](/vext/ref/fb/materialsoldiersoundsettings). |

## Properties

### {{% prop-heading "footStepSound" %}}

> **[SoundAsset](/vext/ref/fb/soundasset)** \| **nil**

### {{% prop-heading "proneSound" %}}

> **[SoundAsset](/vext/ref/fb/soundasset)** \| **nil**

### {{% prop-heading "landSound" %}}

> **[SoundAsset](/vext/ref/fb/soundasset)** \| **nil**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [MaterialSoldierSoundSettings](/vext/ref/fb/materialsoldiersoundsettings) type.

