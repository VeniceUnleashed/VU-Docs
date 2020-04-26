---
title: SoundPatchPublicNode
---

## Summary

### Constructors

|  |
| --- |
| **[SoundPatchPublicNode](#constructor-0)**() |
| **[SoundPatchPublicNode](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "node" >}} | [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) \| nil |
| {{< prop "id" >}} | int |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [SoundPatchPublicNode](/vext/ref/fb/soundpatchpublicnode) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "SoundPatchPublicNode" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### SoundPatchPublicNode {#constructor-0}

> **SoundPatchPublicNode**()

Creates a new [SoundPatchPublicNode](/vext/ref/fb/soundpatchpublicnode) frostbite instance.

### SoundPatchPublicNode {#constructor-1}

> **SoundPatchPublicNode**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [SoundPatchPublicNode](/vext/ref/fb/soundpatchpublicnode) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "node" %}}

> **[AudioGraphNodeData](/vext/ref/fb/audiographnodedata)** \| **nil**

### {{% prop-heading "id" %}}

> **int**

## Methods

### Clone {#clone}

> **Clone**(): [SoundPatchPublicNode](/vext/ref/fb/soundpatchpublicnode)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[SoundPatchPublicNode](/vext/ref/fb/soundpatchpublicnode)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [SoundPatchPublicNode](/vext/ref/fb/soundpatchpublicnode) type.

