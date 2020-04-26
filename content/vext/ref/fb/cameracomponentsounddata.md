---
title: CameraComponentSoundData
---

Inherits from [DataContainer](/vext/ref/shared/type/datacontainer)

## Summary

### Constructors

|  |
| --- |
| **[CameraComponentSoundData](#constructor-0)**() |
| **[CameraComponentSoundData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[CameraComponentSoundData](#constructor-2)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "switchToAlternateViewSound" >}} | [SoundAsset](/vext/ref/fb/soundasset) \| nil |
| {{< prop "switchToNormalViewSound" >}} | [SoundAsset](/vext/ref/fb/soundasset) \| nil |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "CameraComponentSoundData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### CameraComponentSoundData {#constructor-0}

> **CameraComponentSoundData**()

Creates a new [CameraComponentSoundData](/vext/ref/fb/cameracomponentsounddata) frostbite instance.

### CameraComponentSoundData {#constructor-1}

> **CameraComponentSoundData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [CameraComponentSoundData](/vext/ref/fb/cameracomponentsounddata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### CameraComponentSoundData {#constructor-2}

> **CameraComponentSoundData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [CameraComponentSoundData](/vext/ref/fb/cameracomponentsounddata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [CameraComponentSoundData](/vext/ref/fb/cameracomponentsounddata). |

## Properties

### {{% prop-heading "switchToAlternateViewSound" %}}

> **[SoundAsset](/vext/ref/fb/soundasset)** \| **nil**

### {{% prop-heading "switchToNormalViewSound" %}}

> **[SoundAsset](/vext/ref/fb/soundasset)** \| **nil**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [CameraComponentSoundData](/vext/ref/fb/cameracomponentsounddata) type.

