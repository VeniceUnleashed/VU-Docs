---
title: AILocoComponentData
---

Inherits from 
[ComponentData](/vext/ref/fb/componentdata)

## Summary
### Constructors
| |
| ----------- |
| **[AILocoComponentData](#constructor-0)**() |
| **[AILocoComponentData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[AILocoComponentData](#constructor-2)**(other: [ComponentData](/vext/ref/fb/componentdata)) |
| **[AILocoComponentData](#constructor-3)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[AILocoComponentData](#constructor-4)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[AILocoComponentData](#constructor-5)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "binding" >}} | [AILocoBinding](/vext/ref/fb/ailocobinding) |
| {{< prop "vaultBinding" >}} | [AILocoVaultBinding](/vext/ref/fb/ailocovaultbinding) |
| {{< prop "coverBinding" >}} | [AILocoCoverBinding](/vext/ref/fb/ailococoverbinding) |
| {{< prop "wantedYaw" >}} | float |
| {{< prop "animationEntitySpacePriority" >}} | int |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "AILocoComponentData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### AILocoComponentData {#constructor-0}
> **AILocoComponentData**()

Creates a new [AILocoComponentData](/vext/ref/fb/ailococomponentdata) frostbite instance.

### AILocoComponentData {#constructor-1}
> **AILocoComponentData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [AILocoComponentData](/vext/ref/fb/ailococomponentdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### AILocoComponentData {#constructor-2}
> **AILocoComponentData**(other: [ComponentData](/vext/ref/fb/componentdata))

Casts an instance of type [ComponentData](/vext/ref/fb/componentdata) to [AILocoComponentData](/vext/ref/fb/ailococomponentdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [ComponentData](/vext/ref/fb/componentdata) | The instance to cast to [AILocoComponentData](/vext/ref/fb/ailococomponentdata). |

### AILocoComponentData {#constructor-3}
> **AILocoComponentData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [AILocoComponentData](/vext/ref/fb/ailococomponentdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [AILocoComponentData](/vext/ref/fb/ailococomponentdata). |

### AILocoComponentData {#constructor-4}
> **AILocoComponentData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [AILocoComponentData](/vext/ref/fb/ailococomponentdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [AILocoComponentData](/vext/ref/fb/ailococomponentdata). |

### AILocoComponentData {#constructor-5}
> **AILocoComponentData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [AILocoComponentData](/vext/ref/fb/ailococomponentdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [AILocoComponentData](/vext/ref/fb/ailococomponentdata). |

## Properties
### {{% prop-heading "binding" %}}
> **[AILocoBinding](/vext/ref/fb/ailocobinding)**

### {{% prop-heading "vaultBinding" %}}
> **[AILocoVaultBinding](/vext/ref/fb/ailocovaultbinding)**

### {{% prop-heading "coverBinding" %}}
> **[AILocoCoverBinding](/vext/ref/fb/ailococoverbinding)**

### {{% prop-heading "wantedYaw" %}}
> **float**

### {{% prop-heading "animationEntitySpacePriority" %}}
> **int**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [AILocoComponentData](/vext/ref/fb/ailococomponentdata) type.

