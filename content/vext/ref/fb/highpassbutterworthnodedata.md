---
title: HighPassButterworthNodeData
---

Inherits from [AudioGraphNodeData](/vext/ref/fb/audiographnodedata)

## Summary

### Constructors

|  |
| --- |
| **[HighPassButterworthNodeData](#constructor-0)**() |
| **[HighPassButterworthNodeData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[HighPassButterworthNodeData](#constructor-2)**(other: [AudioGraphNodeData](/vext/ref/fb/audiographnodedata)) |
| **[HighPassButterworthNodeData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "inValue" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "frequency" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "order" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "out" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "plugin" >}} | [SoundGraphPluginRef](/vext/ref/fb/soundgraphpluginref) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "HighPassButterworthNodeData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### HighPassButterworthNodeData {#constructor-0}

> **HighPassButterworthNodeData**()

Creates a new [HighPassButterworthNodeData](/vext/ref/fb/highpassbutterworthnodedata) frostbite instance.

### HighPassButterworthNodeData {#constructor-1}

> **HighPassButterworthNodeData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [HighPassButterworthNodeData](/vext/ref/fb/highpassbutterworthnodedata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### HighPassButterworthNodeData {#constructor-2}

> **HighPassButterworthNodeData**(other: [AudioGraphNodeData](/vext/ref/fb/audiographnodedata))

Casts an instance of type [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) to [HighPassButterworthNodeData](/vext/ref/fb/highpassbutterworthnodedata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) | The instance to cast to [HighPassButterworthNodeData](/vext/ref/fb/highpassbutterworthnodedata). |

### HighPassButterworthNodeData {#constructor-3}

> **HighPassButterworthNodeData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [HighPassButterworthNodeData](/vext/ref/fb/highpassbutterworthnodedata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [HighPassButterworthNodeData](/vext/ref/fb/highpassbutterworthnodedata). |

## Properties

### {{% prop-heading "inValue" %}}

> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "frequency" %}}

> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "order" %}}

> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "out" %}}

> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "plugin" %}}

> **[SoundGraphPluginRef](/vext/ref/fb/soundgraphpluginref)**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [HighPassButterworthNodeData](/vext/ref/fb/highpassbutterworthnodedata) type.

