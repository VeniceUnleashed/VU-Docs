---
title: MixerPresetNodeData
---

## Summary

### Constructors

|  |
| --- |
| **[MixerPresetNodeData](#constructor-0)**() |
| **[MixerPresetNodeData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "node" >}} | [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) \| nil |
| {{< prop "value" >}} | float |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [MixerPresetNodeData](/vext/ref/fb/mixerpresetnodedata) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "MixerPresetNodeData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### MixerPresetNodeData {#constructor-0}

> **MixerPresetNodeData**()

Creates a new [MixerPresetNodeData](/vext/ref/fb/mixerpresetnodedata) frostbite instance.

### MixerPresetNodeData {#constructor-1}

> **MixerPresetNodeData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [MixerPresetNodeData](/vext/ref/fb/mixerpresetnodedata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "node" %}}

> **[AudioGraphNodeData](/vext/ref/fb/audiographnodedata)** \| **nil**

### {{% prop-heading "value" %}}

> **float**

## Methods

### Clone {#clone}

> **Clone**(): [MixerPresetNodeData](/vext/ref/fb/mixerpresetnodedata)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[MixerPresetNodeData](/vext/ref/fb/mixerpresetnodedata)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [MixerPresetNodeData](/vext/ref/fb/mixerpresetnodedata) type.

