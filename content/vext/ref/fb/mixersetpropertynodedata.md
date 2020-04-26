---
title: MixerSetPropertyNodeData
---

Inherits from [AudioGraphNodeData](/vext/ref/fb/audiographnodedata)

## Summary

### Constructors

|  |
| --- |
| **[MixerSetPropertyNodeData](#constructor-0)**() |
| **[MixerSetPropertyNodeData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[MixerSetPropertyNodeData](#constructor-2)**(other: [AudioGraphNodeData](/vext/ref/fb/audiographnodedata)) |
| **[MixerSetPropertyNodeData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "entries" >}} | [MixerSetPropertyEntry](/vext/ref/fb/mixersetpropertyentry)[] |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "MixerSetPropertyNodeData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### MixerSetPropertyNodeData {#constructor-0}

> **MixerSetPropertyNodeData**()

Creates a new [MixerSetPropertyNodeData](/vext/ref/fb/mixersetpropertynodedata) frostbite instance.

### MixerSetPropertyNodeData {#constructor-1}

> **MixerSetPropertyNodeData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [MixerSetPropertyNodeData](/vext/ref/fb/mixersetpropertynodedata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### MixerSetPropertyNodeData {#constructor-2}

> **MixerSetPropertyNodeData**(other: [AudioGraphNodeData](/vext/ref/fb/audiographnodedata))

Casts an instance of type [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) to [MixerSetPropertyNodeData](/vext/ref/fb/mixersetpropertynodedata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) | The instance to cast to [MixerSetPropertyNodeData](/vext/ref/fb/mixersetpropertynodedata). |

### MixerSetPropertyNodeData {#constructor-3}

> **MixerSetPropertyNodeData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [MixerSetPropertyNodeData](/vext/ref/fb/mixersetpropertynodedata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [MixerSetPropertyNodeData](/vext/ref/fb/mixersetpropertynodedata). |

## Properties

### {{% prop-heading "entries" %}}

> **[MixerSetPropertyEntry](/vext/ref/fb/mixersetpropertyentry)**[]

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [MixerSetPropertyNodeData](/vext/ref/fb/mixersetpropertynodedata) type.

