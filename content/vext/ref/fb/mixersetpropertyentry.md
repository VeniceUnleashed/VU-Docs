---
title: MixerSetPropertyEntry
---

Inherits from [AudioGraphNodePortGroup](/vext/ref/fb/audiographnodeportgroup)

## Summary

### Constructors

|  |
| --- |
| **[MixerSetPropertyEntry](#constructor-0)**() |
| **[MixerSetPropertyEntry](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[MixerSetPropertyEntry](#constructor-2)**(other: [AudioGraphNodePortGroup](/vext/ref/fb/audiographnodeportgroup)) |
| **[MixerSetPropertyEntry](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "inValue" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "target" >}} | int |
| {{< prop "group" >}} | [MixGroup](/vext/ref/fb/mixgroup) \| nil |
| {{< prop "attackTime" >}} | float |
| {{< prop "releaseTime" >}} | float |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "MixerSetPropertyEntry" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### MixerSetPropertyEntry {#constructor-0}

> **MixerSetPropertyEntry**()

Creates a new [MixerSetPropertyEntry](/vext/ref/fb/mixersetpropertyentry) frostbite instance.

### MixerSetPropertyEntry {#constructor-1}

> **MixerSetPropertyEntry**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [MixerSetPropertyEntry](/vext/ref/fb/mixersetpropertyentry) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### MixerSetPropertyEntry {#constructor-2}

> **MixerSetPropertyEntry**(other: [AudioGraphNodePortGroup](/vext/ref/fb/audiographnodeportgroup))

Casts an instance of type [AudioGraphNodePortGroup](/vext/ref/fb/audiographnodeportgroup) to [MixerSetPropertyEntry](/vext/ref/fb/mixersetpropertyentry). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [AudioGraphNodePortGroup](/vext/ref/fb/audiographnodeportgroup) | The instance to cast to [MixerSetPropertyEntry](/vext/ref/fb/mixersetpropertyentry). |

### MixerSetPropertyEntry {#constructor-3}

> **MixerSetPropertyEntry**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [MixerSetPropertyEntry](/vext/ref/fb/mixersetpropertyentry). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [MixerSetPropertyEntry](/vext/ref/fb/mixersetpropertyentry). |

## Properties

### {{% prop-heading "inValue" %}}

> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "target" %}}

> **int**

### {{% prop-heading "group" %}}

> **[MixGroup](/vext/ref/fb/mixgroup)** \| **nil**

### {{% prop-heading "attackTime" %}}

> **float**

### {{% prop-heading "releaseTime" %}}

> **float**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [MixerSetPropertyEntry](/vext/ref/fb/mixersetpropertyentry) type.

