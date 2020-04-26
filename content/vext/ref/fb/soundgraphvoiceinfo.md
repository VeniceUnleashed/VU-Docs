---
title: SoundGraphVoiceInfo
---

## Summary

### Constructors

|  |
| --- |
| **[SoundGraphVoiceInfo](#constructor-0)**() |
| **[SoundGraphVoiceInfo](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "plugins" >}} | [SoundGraphPluginInfo](/vext/ref/fb/soundgraphplugininfo)[] |
| {{< prop "processingStage" >}} | int |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [SoundGraphVoiceInfo](/vext/ref/fb/soundgraphvoiceinfo) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "SoundGraphVoiceInfo" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### SoundGraphVoiceInfo {#constructor-0}

> **SoundGraphVoiceInfo**()

Creates a new [SoundGraphVoiceInfo](/vext/ref/fb/soundgraphvoiceinfo) frostbite instance.

### SoundGraphVoiceInfo {#constructor-1}

> **SoundGraphVoiceInfo**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [SoundGraphVoiceInfo](/vext/ref/fb/soundgraphvoiceinfo) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "plugins" %}}

> **[SoundGraphPluginInfo](/vext/ref/fb/soundgraphplugininfo)**[]

### {{% prop-heading "processingStage" %}}

> **int**

## Methods

### Clone {#clone}

> **Clone**(): [SoundGraphVoiceInfo](/vext/ref/fb/soundgraphvoiceinfo)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[SoundGraphVoiceInfo](/vext/ref/fb/soundgraphvoiceinfo)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [SoundGraphVoiceInfo](/vext/ref/fb/soundgraphvoiceinfo) type.

