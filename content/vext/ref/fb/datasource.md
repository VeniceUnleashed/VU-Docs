---
title: DataSource
---


## Summary
### Constructors
| |
| ----------- |
| **[DataSource](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "category" >}} | [UIComponentData](/vext/ref/fb/uicomponentdata) \| nil |
| {{< prop "value" >}} | int |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [DataSource](/vext/ref/fb/datasource) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "DataSource" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### DataSource {#constructor-0}
> **DataSource**()

Creates a new [DataSource](/vext/ref/fb/datasource) frostbite structure.

## Properties
### {{% prop-heading "category" %}}
> **[UIComponentData](/vext/ref/fb/uicomponentdata)** | **nil**

### {{% prop-heading "value" %}}
> **int**

## Methods
### Clone
> **Clone**(): [DataSource](/vext/ref/fb/datasource)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[DataSource](/vext/ref/fb/datasource)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [DataSource](/vext/ref/fb/datasource) type.

