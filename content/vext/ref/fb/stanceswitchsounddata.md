---
title: StanceSwitchSoundData
---

## Summary

### Constructors

|  |
| --- |
| **[StanceSwitchSoundData](#constructor-0)**() |
| **[StanceSwitchSoundData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "stanceSwitchSound" >}} | [SoundAsset](/vext/ref/fb/soundasset) \| nil |
| {{< prop "validStances" >}} | int[] |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [StanceSwitchSoundData](/vext/ref/fb/stanceswitchsounddata) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "StanceSwitchSoundData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### StanceSwitchSoundData {#constructor-0}

> **StanceSwitchSoundData**()

Creates a new [StanceSwitchSoundData](/vext/ref/fb/stanceswitchsounddata) frostbite instance.

### StanceSwitchSoundData {#constructor-1}

> **StanceSwitchSoundData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [StanceSwitchSoundData](/vext/ref/fb/stanceswitchsounddata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "stanceSwitchSound" %}}

> **[SoundAsset](/vext/ref/fb/soundasset)** \| **nil**

### {{% prop-heading "validStances" %}}

> **int**[]

## Methods

### Clone {#clone}

> **Clone**(): [StanceSwitchSoundData](/vext/ref/fb/stanceswitchsounddata)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[StanceSwitchSoundData](/vext/ref/fb/stanceswitchsounddata)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [StanceSwitchSoundData](/vext/ref/fb/stanceswitchsounddata) type.

