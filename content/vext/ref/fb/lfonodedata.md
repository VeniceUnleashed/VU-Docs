---
title: LfoNodeData
---

Inherits from [AudioGraphNodeData](/vext/ref/fb/audiographnodedata)

## Summary

### Constructors

|  |
| --- |
| **[LfoNodeData](#constructor-0)**() |
| **[LfoNodeData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[LfoNodeData](#constructor-2)**(other: [AudioGraphNodeData](/vext/ref/fb/audiographnodedata)) |
| **[LfoNodeData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "hz" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "amplitude" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "out" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "min" >}} | float |
| {{< prop "max" >}} | float |
| {{< prop "startAtRandomValue" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "LfoNodeData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### LfoNodeData {#constructor-0}

> **LfoNodeData**()

Creates a new [LfoNodeData](/vext/ref/fb/lfonodedata) frostbite instance.

### LfoNodeData {#constructor-1}

> **LfoNodeData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [LfoNodeData](/vext/ref/fb/lfonodedata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### LfoNodeData {#constructor-2}

> **LfoNodeData**(other: [AudioGraphNodeData](/vext/ref/fb/audiographnodedata))

Casts an instance of type [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) to [LfoNodeData](/vext/ref/fb/lfonodedata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) | The instance to cast to [LfoNodeData](/vext/ref/fb/lfonodedata). |

### LfoNodeData {#constructor-3}

> **LfoNodeData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [LfoNodeData](/vext/ref/fb/lfonodedata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [LfoNodeData](/vext/ref/fb/lfonodedata). |

## Properties

### {{% prop-heading "hz" %}}

> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "amplitude" %}}

> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "out" %}}

> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "min" %}}

> **float**

### {{% prop-heading "max" %}}

> **float**

### {{% prop-heading "startAtRandomValue" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [LfoNodeData](/vext/ref/fb/lfonodedata) type.

