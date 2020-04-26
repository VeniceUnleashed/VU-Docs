---
title: RouteNodeData
---

Inherits from [AudioGraphNodeData](/vext/ref/fb/audiographnodedata)

## Summary

### Constructors

|  |
| --- |
| **[RouteNodeData](#constructor-0)**() |
| **[RouteNodeData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[RouteNodeData](#constructor-2)**(other: [AudioGraphNodeData](/vext/ref/fb/audiographnodedata)) |
| **[RouteNodeData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "inValue" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "routes" >}} | [RouteEntry](/vext/ref/fb/routeentry)[] |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "RouteNodeData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### RouteNodeData {#constructor-0}

> **RouteNodeData**()

Creates a new [RouteNodeData](/vext/ref/fb/routenodedata) frostbite instance.

### RouteNodeData {#constructor-1}

> **RouteNodeData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [RouteNodeData](/vext/ref/fb/routenodedata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### RouteNodeData {#constructor-2}

> **RouteNodeData**(other: [AudioGraphNodeData](/vext/ref/fb/audiographnodedata))

Casts an instance of type [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) to [RouteNodeData](/vext/ref/fb/routenodedata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) | The instance to cast to [RouteNodeData](/vext/ref/fb/routenodedata). |

### RouteNodeData {#constructor-3}

> **RouteNodeData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [RouteNodeData](/vext/ref/fb/routenodedata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [RouteNodeData](/vext/ref/fb/routenodedata). |

## Properties

### {{% prop-heading "inValue" %}}

> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "routes" %}}

> **[RouteEntry](/vext/ref/fb/routeentry)**[]

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [RouteNodeData](/vext/ref/fb/routenodedata) type.

