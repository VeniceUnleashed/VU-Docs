---
title: DataVisualizerValue
---


## Summary
### Constructors
| |
| ----------- |
| **[DataVisualizerValue](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "value" >}} | string |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [DataVisualizerValue](/vext/ref/fb/datavisualizervalue) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "DataVisualizerValue" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### DataVisualizerValue {#constructor-0}
> **DataVisualizerValue**()

Creates a new [DataVisualizerValue](/vext/ref/fb/datavisualizervalue) frostbite structure.

## Properties
### {{% prop-heading "value" %}}
> **string**

## Methods
### Clone
> **Clone**(): [DataVisualizerValue](/vext/ref/fb/datavisualizervalue)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[DataVisualizerValue](/vext/ref/fb/datavisualizervalue)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [DataVisualizerValue](/vext/ref/fb/datavisualizervalue) type.

