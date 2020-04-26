---
title: BandPassIir2NodeData
---

Inherits from [AudioGraphNodeData](/vext/ref/fb/audiographnodedata)

## Summary

### Constructors

|  |
| --- |
| **[BandPassIir2NodeData](#constructor-0)**() |
| **[BandPassIir2NodeData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[BandPassIir2NodeData](#constructor-2)**(other: [AudioGraphNodeData](/vext/ref/fb/audiographnodedata)) |
| **[BandPassIir2NodeData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "inValue" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "frequency" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "bandwidth" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "out" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "plugin" >}} | [SoundGraphPluginRef](/vext/ref/fb/soundgraphpluginref) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "BandPassIir2NodeData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### BandPassIir2NodeData {#constructor-0}

> **BandPassIir2NodeData**()

Creates a new [BandPassIir2NodeData](/vext/ref/fb/bandpassiir2nodedata) frostbite instance.

### BandPassIir2NodeData {#constructor-1}

> **BandPassIir2NodeData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [BandPassIir2NodeData](/vext/ref/fb/bandpassiir2nodedata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### BandPassIir2NodeData {#constructor-2}

> **BandPassIir2NodeData**(other: [AudioGraphNodeData](/vext/ref/fb/audiographnodedata))

Casts an instance of type [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) to [BandPassIir2NodeData](/vext/ref/fb/bandpassiir2nodedata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) | The instance to cast to [BandPassIir2NodeData](/vext/ref/fb/bandpassiir2nodedata). |

### BandPassIir2NodeData {#constructor-3}

> **BandPassIir2NodeData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [BandPassIir2NodeData](/vext/ref/fb/bandpassiir2nodedata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [BandPassIir2NodeData](/vext/ref/fb/bandpassiir2nodedata). |

## Properties

### {{% prop-heading "inValue" %}}

> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "frequency" %}}

> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "bandwidth" %}}

> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "out" %}}

> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "plugin" %}}

> **[SoundGraphPluginRef](/vext/ref/fb/soundgraphpluginref)**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [BandPassIir2NodeData](/vext/ref/fb/bandpassiir2nodedata) type.

