---
title: CameraBinding
---


## Summary
### Constructors
| |
| ----------- |
| **[CameraBinding](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "render1pInBackground" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "forceRender1pInForeground" >}} | [AntRef](/vext/ref/fb/antref) |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [CameraBinding](/vext/ref/fb/camerabinding) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "CameraBinding" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### CameraBinding {#constructor-0}
> **CameraBinding**()

Creates a new [CameraBinding](/vext/ref/fb/camerabinding) frostbite structure.

## Properties
### {{% prop-heading "render1pInBackground" %}}
> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "forceRender1pInForeground" %}}
> **[AntRef](/vext/ref/fb/antref)**

## Methods
### Clone
> **Clone**(): [CameraBinding](/vext/ref/fb/camerabinding)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[CameraBinding](/vext/ref/fb/camerabinding)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [CameraBinding](/vext/ref/fb/camerabinding) type.

