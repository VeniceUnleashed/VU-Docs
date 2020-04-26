---
title: AudioGraphNodePort
---

## Summary

### Constructors

|  |
| --- |
| **[AudioGraphNodePort](#constructor-0)**() |
| **[AudioGraphNodePort](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "unconnectedValue" >}} | float |
| {{< prop "valueIndex" >}} | int |
| {{< prop "isConnected" >}} | bool |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "AudioGraphNodePort" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### AudioGraphNodePort {#constructor-0}

> **AudioGraphNodePort**()

Creates a new [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) frostbite instance.

### AudioGraphNodePort {#constructor-1}

> **AudioGraphNodePort**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "unconnectedValue" %}}

> **float**

### {{% prop-heading "valueIndex" %}}

> **int**

### {{% prop-heading "isConnected" %}}

> **bool**

## Methods

### Clone {#clone}

> **Clone**(): [AudioGraphNodePort](/vext/ref/fb/audiographnodeport)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) type.

