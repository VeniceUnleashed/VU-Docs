---
title: SoundGraphLinkedPluginAttribute
---

## Summary

### Constructors

|  |
| --- |
| **[SoundGraphLinkedPluginAttribute](#constructor-0)**() |
| **[SoundGraphLinkedPluginAttribute](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "plugin" >}} | [SoundGraphPluginRef](/vext/ref/fb/soundgraphpluginref) |
| {{< prop "node" >}} | [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) \| nil |
| {{< prop "port" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "attributeIndex" >}} | int |
| {{< prop "allowExtremeValues" >}} | bool |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [SoundGraphLinkedPluginAttribute](/vext/ref/fb/soundgraphlinkedpluginattribute) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "SoundGraphLinkedPluginAttribute" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### SoundGraphLinkedPluginAttribute {#constructor-0}

> **SoundGraphLinkedPluginAttribute**()

Creates a new [SoundGraphLinkedPluginAttribute](/vext/ref/fb/soundgraphlinkedpluginattribute) frostbite instance.

### SoundGraphLinkedPluginAttribute {#constructor-1}

> **SoundGraphLinkedPluginAttribute**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [SoundGraphLinkedPluginAttribute](/vext/ref/fb/soundgraphlinkedpluginattribute) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "plugin" %}}

> **[SoundGraphPluginRef](/vext/ref/fb/soundgraphpluginref)**

### {{% prop-heading "node" %}}

> **[AudioGraphNodeData](/vext/ref/fb/audiographnodedata)** \| **nil**

### {{% prop-heading "port" %}}

> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "attributeIndex" %}}

> **int**

### {{% prop-heading "allowExtremeValues" %}}

> **bool**

## Methods

### Clone {#clone}

> **Clone**(): [SoundGraphLinkedPluginAttribute](/vext/ref/fb/soundgraphlinkedpluginattribute)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[SoundGraphLinkedPluginAttribute](/vext/ref/fb/soundgraphlinkedpluginattribute)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [SoundGraphLinkedPluginAttribute](/vext/ref/fb/soundgraphlinkedpluginattribute) type.

