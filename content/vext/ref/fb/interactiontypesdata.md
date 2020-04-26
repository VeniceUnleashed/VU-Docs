---
title: InteractionTypesData
---


## Summary
### Constructors
| |
| ----------- |
| **[InteractionTypesData](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "interactionEntity" >}} | bool |
| {{< prop "pickupEntity" >}} | bool |
| {{< prop "ammoCrateEntity" >}} | bool |
| {{< prop "vehicleEntity" >}} | bool |
| {{< prop "explosionPackEntity" >}} | bool |
| {{< prop "soldierEntity" >}} | bool |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [InteractionTypesData](/vext/ref/fb/interactiontypesdata) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "InteractionTypesData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### InteractionTypesData {#constructor-0}
> **InteractionTypesData**()

Creates a new [InteractionTypesData](/vext/ref/fb/interactiontypesdata) frostbite structure.

## Properties
### {{% prop-heading "interactionEntity" %}}
> **bool**

### {{% prop-heading "pickupEntity" %}}
> **bool**

### {{% prop-heading "ammoCrateEntity" %}}
> **bool**

### {{% prop-heading "vehicleEntity" %}}
> **bool**

### {{% prop-heading "explosionPackEntity" %}}
> **bool**

### {{% prop-heading "soldierEntity" %}}
> **bool**

## Methods
### Clone
> **Clone**(): [InteractionTypesData](/vext/ref/fb/interactiontypesdata)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[InteractionTypesData](/vext/ref/fb/interactiontypesdata)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [InteractionTypesData](/vext/ref/fb/interactiontypesdata) type.

