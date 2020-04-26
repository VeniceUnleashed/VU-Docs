---
title: AudioGraphNodePort
---


## Summary
### Constructors
| |
| ----------- |
| **[AudioGraphNodePort](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "unconnectedValue" >}} | float |
| {{< prop "valueIndex" >}} | int |
| {{< prop "isConnected" >}} | bool |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "AudioGraphNodePort" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### AudioGraphNodePort {#constructor-0}
> **AudioGraphNodePort**()

Creates a new [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) frostbite structure.

## Properties
### {{% prop-heading "unconnectedValue" %}}
> **float**

### {{% prop-heading "valueIndex" %}}
> **int**

### {{% prop-heading "isConnected" %}}
> **bool**

## Methods
### Clone
> **Clone**(): [AudioGraphNodePort](/vext/ref/fb/audiographnodeport)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) type.

