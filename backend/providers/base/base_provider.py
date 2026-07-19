from abc import ABC, abstractmethod


class BaseProvider(ABC):
    """
    Base class for every AI Provider.
    """

    @abstractmethod
    def get_info(self):
        """Return provider information."""
        pass

    @abstractmethod
    def get_models(self):
        """Return supported models."""
        pass

    @abstractmethod
    def test_connection(self, model: str, prompt: str):
        """Send a prompt to the provider."""
        pass