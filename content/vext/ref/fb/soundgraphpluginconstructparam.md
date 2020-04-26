---
title: SoundGraphPluginConstructParam
---

## Summary

### Constructors

|  |
| --- |
| **[SoundGraphPluginConstructParam](#constructor-0)**() |
| **[SoundGraphPluginConstructParam](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "value" >}} | float |
| {{< prop "index" >}} | int |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [SoundGraphPluginConstructParam](/vext/ref/fb/soundgraphpluginconstructparam) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "SoundGraphPluginConstructParam" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### SoundGraphPluginConstructParam {#constructor-0}

> **SoundGraphPluginConstructParam**()

Creates a new [SoundGraphPluginConstructParam](/vext/ref/fb/soundgraphpluginconstructparam) frostbite instance.

### SoundGraphPluginConstructParam {#constructor-1}

> **SoundGraphPluginConstructParam**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [SoundGraphPluginConstructParam](/vext/ref/fb/soundgraphpluginconstructparam) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "value" %}}

> **float**

### {{% prop-heading "index" %}}

> **int**

## Methods

### Clone {#clone}

> **Clone**(): [SoundGraphPluginConstructParam](/vext/ref/fb/soundgraphpluginconstructparam)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[SoundGraphPluginConstructParam](/vext/ref/fb/soundgraphpluginconstructparam)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [SoundGraphPluginConstructParam](/vext/ref/fb/soundgraphpluginconstructparam) type.

