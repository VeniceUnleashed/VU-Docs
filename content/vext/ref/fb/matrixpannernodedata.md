---
title: MatrixPannerNodeData
---

Inherits from [AudioGraphNodeData](/vext/ref/fb/audiographnodedata)

## Summary

### Constructors

|  |
| --- |
| **[MatrixPannerNodeData](#constructor-0)**() |
| **[MatrixPannerNodeData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[MatrixPannerNodeData](#constructor-2)**(other: [AudioGraphNodeData](/vext/ref/fb/audiographnodedata)) |
| **[MatrixPannerNodeData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "inValue" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "frontLeft" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "center" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "frontRight" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "rearLeft" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "lfe" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "rearRight" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "farRearLeft" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "farRearRight" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "out" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "MatrixPannerNodeData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### MatrixPannerNodeData {#constructor-0}

> **MatrixPannerNodeData**()

Creates a new [MatrixPannerNodeData](/vext/ref/fb/matrixpannernodedata) frostbite instance.

### MatrixPannerNodeData {#constructor-1}

> **MatrixPannerNodeData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [MatrixPannerNodeData](/vext/ref/fb/matrixpannernodedata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### MatrixPannerNodeData {#constructor-2}

> **MatrixPannerNodeData**(other: [AudioGraphNodeData](/vext/ref/fb/audiographnodedata))

Casts an instance of type [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) to [MatrixPannerNodeData](/vext/ref/fb/matrixpannernodedata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) | The instance to cast to [MatrixPannerNodeData](/vext/ref/fb/matrixpannernodedata). |

### MatrixPannerNodeData {#constructor-3}

> **MatrixPannerNodeData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [MatrixPannerNodeData](/vext/ref/fb/matrixpannernodedata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [MatrixPannerNodeData](/vext/ref/fb/matrixpannernodedata). |

## Properties

### {{% prop-heading "inValue" %}}

> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "frontLeft" %}}

> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "center" %}}

> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "frontRight" %}}

> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "rearLeft" %}}

> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "lfe" %}}

> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "rearRight" %}}

> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "farRearLeft" %}}

> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "farRearRight" %}}

> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "out" %}}

> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [MatrixPannerNodeData](/vext/ref/fb/matrixpannernodedata) type.

