---
title: MovementConstantData
---

Inherits from 
[Asset](/vext/ref/fb/asset)

## Summary
### Constructors
| |
| ----------- |
| **[MovementConstantData](#constructor-0)**() |
| **[MovementConstantData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[MovementConstantData](#constructor-2)**(other: [Asset](/vext/ref/fb/asset)) |
| **[MovementConstantData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "maxCrouchWalkDistance" >}} | float |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "MovementConstantData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### MovementConstantData {#constructor-0}
> **MovementConstantData**()

Creates a new [MovementConstantData](/vext/ref/fb/movementconstantdata) frostbite instance.

### MovementConstantData {#constructor-1}
> **MovementConstantData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [MovementConstantData](/vext/ref/fb/movementconstantdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### MovementConstantData {#constructor-2}
> **MovementConstantData**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [MovementConstantData](/vext/ref/fb/movementconstantdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [MovementConstantData](/vext/ref/fb/movementconstantdata). |

### MovementConstantData {#constructor-3}
> **MovementConstantData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MovementConstantData](/vext/ref/fb/movementconstantdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [MovementConstantData](/vext/ref/fb/movementconstantdata). |

## Properties
### {{% prop-heading "maxCrouchWalkDistance" %}}
> **float**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [MovementConstantData](/vext/ref/fb/movementconstantdata) type.

