---
title: PhysicsNodeData
---

Inherits from [AudioGraphNodeData](/vext/ref/fb/audiographnodedata)

## Summary

### Constructors

|  |
| --- |
| **[PhysicsNodeData](#constructor-0)**() |
| **[PhysicsNodeData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[PhysicsNodeData](#constructor-2)**(other: [AudioGraphNodeData](/vext/ref/fb/audiographnodedata)) |
| **[PhysicsNodeData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "distance" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "velocity" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "relativeVelocity" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "azimuth" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "elevationAngle" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "entries" >}} | [PhysicsEntry](/vext/ref/fb/physicsentry)[] |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "PhysicsNodeData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### PhysicsNodeData {#constructor-0}

> **PhysicsNodeData**()

Creates a new [PhysicsNodeData](/vext/ref/fb/physicsnodedata) frostbite instance.

### PhysicsNodeData {#constructor-1}

> **PhysicsNodeData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [PhysicsNodeData](/vext/ref/fb/physicsnodedata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### PhysicsNodeData {#constructor-2}

> **PhysicsNodeData**(other: [AudioGraphNodeData](/vext/ref/fb/audiographnodedata))

Casts an instance of type [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) to [PhysicsNodeData](/vext/ref/fb/physicsnodedata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) | The instance to cast to [PhysicsNodeData](/vext/ref/fb/physicsnodedata). |

### PhysicsNodeData {#constructor-3}

> **PhysicsNodeData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [PhysicsNodeData](/vext/ref/fb/physicsnodedata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [PhysicsNodeData](/vext/ref/fb/physicsnodedata). |

## Properties

### {{% prop-heading "distance" %}}

> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "velocity" %}}

> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "relativeVelocity" %}}

> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "azimuth" %}}

> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "elevationAngle" %}}

> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "entries" %}}

> **[PhysicsEntry](/vext/ref/fb/physicsentry)**[]

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [PhysicsNodeData](/vext/ref/fb/physicsnodedata) type.

