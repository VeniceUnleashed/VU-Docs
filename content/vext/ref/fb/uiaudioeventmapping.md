---
title: UIAudioEventMapping
---

## Summary

### Constructors

|  |
| --- |
| **[UIAudioEventMapping](#constructor-0)**() |
| **[UIAudioEventMapping](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "eventName" >}} | string |
| {{< prop "soundAsset" >}} | [SoundAsset](/vext/ref/fb/soundasset) \| nil |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [UIAudioEventMapping](/vext/ref/fb/uiaudioeventmapping) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "UIAudioEventMapping" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### UIAudioEventMapping {#constructor-0}

> **UIAudioEventMapping**()

Creates a new [UIAudioEventMapping](/vext/ref/fb/uiaudioeventmapping) frostbite instance.

### UIAudioEventMapping {#constructor-1}

> **UIAudioEventMapping**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [UIAudioEventMapping](/vext/ref/fb/uiaudioeventmapping) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "eventName" %}}

> **string**

### {{% prop-heading "soundAsset" %}}

> **[SoundAsset](/vext/ref/fb/soundasset)** \| **nil**

## Methods

### Clone {#clone}

> **Clone**(): [UIAudioEventMapping](/vext/ref/fb/uiaudioeventmapping)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[UIAudioEventMapping](/vext/ref/fb/uiaudioeventmapping)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [UIAudioEventMapping](/vext/ref/fb/uiaudioeventmapping) type.

