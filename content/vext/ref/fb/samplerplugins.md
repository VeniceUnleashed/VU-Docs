---
title: SamplerPlugins
---

## Summary

### Constructors

|  |
| --- |
| **[SamplerPlugins](#constructor-0)**() |
| **[SamplerPlugins](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "sndPlayer" >}} | [SoundGraphPluginRef](/vext/ref/fb/soundgraphpluginref) |
| {{< prop "resample" >}} | [SoundGraphPluginRef](/vext/ref/fb/soundgraphpluginref) |
| {{< prop "pause" >}} | [SoundGraphPluginRef](/vext/ref/fb/soundgraphpluginref) |
| {{< prop "gain" >}} | [SoundGraphPluginRef](/vext/ref/fb/soundgraphpluginref) |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [SamplerPlugins](/vext/ref/fb/samplerplugins) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "SamplerPlugins" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### SamplerPlugins {#constructor-0}

> **SamplerPlugins**()

Creates a new [SamplerPlugins](/vext/ref/fb/samplerplugins) frostbite instance.

### SamplerPlugins {#constructor-1}

> **SamplerPlugins**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [SamplerPlugins](/vext/ref/fb/samplerplugins) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "sndPlayer" %}}

> **[SoundGraphPluginRef](/vext/ref/fb/soundgraphpluginref)**

### {{% prop-heading "resample" %}}

> **[SoundGraphPluginRef](/vext/ref/fb/soundgraphpluginref)**

### {{% prop-heading "pause" %}}

> **[SoundGraphPluginRef](/vext/ref/fb/soundgraphpluginref)**

### {{% prop-heading "gain" %}}

> **[SoundGraphPluginRef](/vext/ref/fb/soundgraphpluginref)**

## Methods

### Clone {#clone}

> **Clone**(): [SamplerPlugins](/vext/ref/fb/samplerplugins)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[SamplerPlugins](/vext/ref/fb/samplerplugins)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [SamplerPlugins](/vext/ref/fb/samplerplugins) type.

