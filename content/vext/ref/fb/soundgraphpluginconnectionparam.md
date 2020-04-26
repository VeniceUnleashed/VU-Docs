---
title: SoundGraphPluginConnectionParam
---

## Summary

### Constructors

|  |
| --- |
| **[SoundGraphPluginConnectionParam](#constructor-0)**() |
| **[SoundGraphPluginConnectionParam](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "value" >}} | float |
| {{< prop "index" >}} | int |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [SoundGraphPluginConnectionParam](/vext/ref/fb/soundgraphpluginconnectionparam) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "SoundGraphPluginConnectionParam" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### SoundGraphPluginConnectionParam {#constructor-0}

> **SoundGraphPluginConnectionParam**()

Creates a new [SoundGraphPluginConnectionParam](/vext/ref/fb/soundgraphpluginconnectionparam) frostbite instance.

### SoundGraphPluginConnectionParam {#constructor-1}

> **SoundGraphPluginConnectionParam**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [SoundGraphPluginConnectionParam](/vext/ref/fb/soundgraphpluginconnectionparam) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

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

> **Clone**(): [SoundGraphPluginConnectionParam](/vext/ref/fb/soundgraphpluginconnectionparam)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[SoundGraphPluginConnectionParam](/vext/ref/fb/soundgraphpluginconnectionparam)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [SoundGraphPluginConnectionParam](/vext/ref/fb/soundgraphpluginconnectionparam) type.

