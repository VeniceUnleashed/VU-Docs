---
title: SoundGraphPluginConnection
---

## Summary

### Constructors

|  |
| --- |
| **[SoundGraphPluginConnection](#constructor-0)**() |
| **[SoundGraphPluginConnection](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "connectionType" >}} | [SoundGraphPluginConnectionType](/vext/ref/fb/soundgraphpluginconnectiontype) |
| {{< prop "parameters" >}} | [SoundGraphPluginConnectionParam](/vext/ref/fb/soundgraphpluginconnectionparam)[] |
| {{< prop "bus" >}} | [SoundBusData](/vext/ref/fb/soundbusdata) \| nil |
| {{< prop "voiceIndex" >}} | int |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [SoundGraphPluginConnection](/vext/ref/fb/soundgraphpluginconnection) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "SoundGraphPluginConnection" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### SoundGraphPluginConnection {#constructor-0}

> **SoundGraphPluginConnection**()

Creates a new [SoundGraphPluginConnection](/vext/ref/fb/soundgraphpluginconnection) frostbite instance.

### SoundGraphPluginConnection {#constructor-1}

> **SoundGraphPluginConnection**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [SoundGraphPluginConnection](/vext/ref/fb/soundgraphpluginconnection) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "connectionType" %}}

> **[SoundGraphPluginConnectionType](/vext/ref/fb/soundgraphpluginconnectiontype)**

### {{% prop-heading "parameters" %}}

> **[SoundGraphPluginConnectionParam](/vext/ref/fb/soundgraphpluginconnectionparam)**[]

### {{% prop-heading "bus" %}}

> **[SoundBusData](/vext/ref/fb/soundbusdata)** \| **nil**

### {{% prop-heading "voiceIndex" %}}

> **int**

## Methods

### Clone {#clone}

> **Clone**(): [SoundGraphPluginConnection](/vext/ref/fb/soundgraphpluginconnection)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[SoundGraphPluginConnection](/vext/ref/fb/soundgraphpluginconnection)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [SoundGraphPluginConnection](/vext/ref/fb/soundgraphpluginconnection) type.

